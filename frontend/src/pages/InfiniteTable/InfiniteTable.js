import React, { useState, useRef, useCallback } from "react";
import useBookSearch from "../../custom-hooks/useBookSearch";
import { Input, Table, Ref } from "semantic-ui-react";
import './InfiniteTable.css';

function InfiniteTable() {

  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [inputValue, setInputValue] = useState('');

  const observer = useRef();

  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber)

  const lastBookElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      console.log(entries)
      if (entries[0].isIntersecting && hasMore) {
        // console.log('visible')
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node);
    // console.log(node);
    // console.log(observer)
  }, [loading, hasMore])

  function handleSearch(e) {
    setQuery(inputValue);
    setPageNumber(1);
  }

  return (
    <>
      <div className="search-bar">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search books"
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Author</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {books.map((book, index) => {
            const { title, author } = book
            const refVariable = (books.length === index + 1) ? lastBookElementRef : null;
            return (
              <Ref innerRef={refVariable}>
                <Table.Row key={index + 1}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{title}</Table.Cell>
                  <Table.Cell>{author}</Table.Cell>
                </Table.Row>
              </Ref>
            )
          })}
        </Table.Body>
      </Table>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </>
  );

}

export default InfiniteTable;