export const data = [
  {
    "score": 17.592657,
    "show": {
      "id": 44813,
      "url": "http://www.tvmaze.com/shows/44813/the-snow-spider",
      "name": "The Snow Spider",
      "type": "Scripted",
      "language": "English",
      "genres": [
        "Drama",
        "Fantasy"
      ],
      "status": "In Development",
      "runtime": 30,
      "premiered": null,
      "officialSite": null,
      "schedule": {
        "time": "",
        "days": [

        ]
      }
    }
  }
]


export const columns = [
  {
    Header: "TV Show",
    columns: [
      {
        Header: "Name",
        accessor: "show.name"
      },
      {
        Header: "Type",
        accessor: "show.type"
      }
    ]
  },
  {
    Header: "Details",
    columns: [
      {
        Header: "Language",
        accessor: "show.language"
      },
      {
        Header: "Genre(s)",
        accessor: "show.genres"
      },
      {
        Header: "Runtime",
        accessor: "show.runtime"
      },
      {
        Header: "Status",
        accessor: "show.status"
      }
    ]
  }
]