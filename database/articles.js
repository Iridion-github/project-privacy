const articles = [
  {
    id: "0",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic1",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    ita: {
      title: "titolo articolo 1",
      subtitle: "sottotitolo articolo 1",
      content: "contenuto articolo 1 - bla bla bla"
    },
    eng: {
      title: "title article 1",
      subtitle: "subtitle article 1",
      content: "content article 1 - bla bla bla"
    }
  },
  {
    id: "1",
    date: "2020-12-26",
    author: "Alessandro Mastropierro",
    topic: "topic2",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-2.png",
    ita: {
      title: "titolo articolo 2",
      subtitle: "sottotitolo articolo 2",
      content: "contenuto articolo 2 - bla bla bla"
    },
    eng: {
      title: "title article 2",
      subtitle: "subtitle article 2",
      content: "content article 2 - bla bla bla"
    }
  },
  {
    id: "2",
    date: "2020-12-27",
    author: "Autore Esterno",
    topic: "topic3",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-3.png",
    ita: {
      title: "titolo articolo 3",
      subtitle: "sottotitolo articolo 3",
      content: "contenuto articolo 3 - bla bla bla"
    },
    eng: {
      title: "title article 3",
      subtitle: "subtitle article 3",
      content: "content article 3 - bla bla bla"
    }
  },
  {
    id: "3",
    date: "2020-12-28",
    author: "Autore Esterno",
    topic: "topic4",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-4.png",
    ita: {
      title: "titolo articolo 4",
      subtitle: "sottotitolo articolo 4",
      content: "contenuto articolo 4 - bla bla bla"
    },
    eng: {
      title: "title article 4",
      subtitle: "subtitle article 4",
      content: "content article 4 - bla bla bla"
    }
  },
  {
    id: "4",
    date: "2020-12-29",
    author: "Autore Esterno",
    topic: "topic5",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-5.png",
    ita: {
      title: "titolo articolo 5",
      subtitle: "sottotitolo articolo 5",
      content: "contenuto articolo 5 - bla bla bla"
    },
    eng: {
      title: "title article 5",
      subtitle: "subtitle article 5",
      content: "content article 5 - bla bla bla"
    }
  },
  {
    id: "5",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic1",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    ita: {
      title: "titolo articolo 1",
      subtitle: "sottotitolo articolo 1",
      content: "contenuto articolo 1 - bla bla bla"
    },
    eng: {
      title: "title article 1",
      subtitle: "subtitle article 1",
      content: "content article 1 - bla bla bla"
    }
  },
  {
    id: "6",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic2",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    ita: {
      title: "titolo articolo 1",
      subtitle: "sottotitolo articolo 1",
      content: "contenuto articolo 1 - bla bla bla"
    },
    eng: {
      title: "title article 1",
      subtitle: "subtitle article 1",
      content: "content article 1 - bla bla bla"
    }
  },
  {
    id: "7",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic3",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    ita: {
      title: "titolo articolo 1",
      subtitle: "sottotitolo articolo 1",
      content: "contenuto articolo 1 - bla bla bla"
    },
    eng: {
      title: "title article 1",
      subtitle: "subtitle article 1",
      content: "content article 1 - bla bla bla"
    }
  },
  {
    id: "8",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic1",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    ita: {
      title: "titolo articolo 1",
      subtitle: "sottotitolo articolo 1",
      content: "contenuto articolo 1 - bla bla bla"
    },
    eng: {
      title: "title article 1",
      subtitle: "subtitle article 1",
      content: "content article 1 - bla bla bla"
    }
  },
  {
    id: "9",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic2",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    ita: {
      title: "titolo articolo 1",
      subtitle: "sottotitolo articolo 1",
      content: "contenuto articolo 1 - bla bla bla"
    },
    eng: {
      title: "title article 1",
      subtitle: "subtitle article 1",
      content: "content article 1 - bla bla bla"
    }
  },
  {
    id: "10",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic3",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    ita: {
      title: "titolo articolo 1",
      subtitle: "sottotitolo articolo 1",
      content: "contenuto articolo 1 - bla bla bla"
    },
    eng: {
      title: "title article 1",
      subtitle: "subtitle article 1",
      content: "content article 1 - bla bla bla"
    }
  },
  {
    id: "11",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic4",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    ita: {
      title: "titolo articolo 1",
      subtitle: "sottotitolo articolo 1",
      content: "contenuto articolo 1 - bla bla bla"
    },
    eng: {
      title: "title article 1",
      subtitle: "subtitle article 1",
      content: "content article 1 - bla bla bla"
    }
  },
  {
    id: "12",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic5",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    ita: {
      title: "titolo articolo 1",
      subtitle: "sottotitolo articolo 1",
      content: "contenuto articolo 1 - bla bla bla"
    },
    eng: {
      title: "title article 1",
      subtitle: "subtitle article 1",
      content: "content article 1 - bla bla bla"
    }
  },
  {
    id: "13",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic4",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    ita: {
      title: "titolo articolo 1",
      subtitle: "sottotitolo articolo 1",
      content: "contenuto articolo 1 - bla bla bla"
    },
    eng: {
      title: "title article 1",
      subtitle: "subtitle article 1",
      content: "content article 1 - bla bla bla"
    }
  },
  {
    id: "14",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic5",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    ita: {
      title: "titolo articolo 1",
      subtitle: "sottotitolo articolo 1",
      content: "contenuto articolo 1 - bla bla bla"
    },
    eng: {
      title: "title article 1",
      subtitle: "subtitle article 1",
      content: "content article 1 - bla bla bla"
    }
  },
  {
    id: "15",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic4",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    ita: {
      title: "titolo articolo 1",
      subtitle: "sottotitolo articolo 1",
      content: "contenuto articolo 1 - bla bla bla"
    },
    eng: {
      title: "title article 1",
      subtitle: "subtitle article 1",
      content: "content article 1 - bla bla bla"
    }
  },
  {
    id: "16",
    date: "2020-12-25",
    author: "Gaetano Mastropierro",
    topic: "topic5",
    tags: ["tag1", "tag2", "tag3"],
    previewImg: "articoli/url-preview-img-1.png",
    ita: {
      title: "titolo articolo 1",
      subtitle: "sottotitolo articolo 1",
      content: "contenuto articolo 1 - bla bla bla"
    },
    eng: {
      title: "title article 1",
      subtitle: "subtitle article 1",
      content: "content article 1 - bla bla bla"
    }
  },






]

export default articles