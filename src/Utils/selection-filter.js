export default function SelectionFilter({ series, films }) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series.filter((item) => item.genre === "documentaries"),
      },
      {
        title: "Comedies",
        data: series.filter((item) => item.genre === "Comedies"),
      },
      {
        title: "Children",
        data: series.filter((item) => item.genre === "children"),
      },
      {
        title: "Crime",
        data: series.filter((item) => item.genre === "crime"),
      },
      {
        title: "Feel Good",
        data: series.filter((item) => item.genre === "feel-good"),
      },
      {
        title: "Feel good",
        data: series.filter((item) => item.genre === "feel-good"),
      },
    ],

    ///////////////////////// <---- films
    films: [
      {
        title: "Drama",
        data: films.filter((item) => item.genre === "drama"),
      },
      {
        title: "Suspense",
        data: films.filter((item) => item.genre === "suspense"),
      },
      {
        title: "Children",
        data: films.filter((item) => item.genre === "children"),
      },
      {
        title: "Thriller",
        data: films.filter((item) => item.genre === "thriller"),
      },
      {
        title: "Romance",
        data: films.filter((item) => item.genre === "romance"),
      },
    ],
  };
}
