import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;
    width:100%;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th{
      background: #72b3fb;
    }
    td{
      background: #c9dff6;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`
