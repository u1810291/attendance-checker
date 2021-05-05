import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  
  table {
    border-spacing: 0;
    border: 1px solid #c4c4c4;
    width: 100%;
    height: 60vh !important;
    overflow: auto;
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
      text-align: center;
      background: #c9dff6;
    }
    // tr :nth-child(even){background-color: #f2f2f2;}

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border: 1px solid #c4c4c4;
      border: 1px solid #c4c4c4;
      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`
