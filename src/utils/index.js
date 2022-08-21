const getData = () => [
  {
    id: 1,
    title: "Belajar",
    body: "Selesaikan Besiswa ID CAMP 2022 Learning Path React",
    createdAt: "2022-08-18T12:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: "Belajar",
    body: "Selesaikan Besiswa ID CAMP 2022 Learning Path React",
    createdAt: "2022-08-18T12:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "Belajar",
    body: "Selesaikan Besiswa ID CAMP 2022 Learning Path React",
    createdAt: "2022-08-18T12:27:34.572Z",
    archived: false,
  },
  {
    id: 4,
    title: "Belajar",
    body: "Selesaikan Besiswa ID CAMP 2022 Learning Path React",
    createdAt: "2022-08-18T12:27:34.572Z",
    archived: true,
  },
  {
    id: 5,
    title: "Belajar",
    body: "Selesaikan Besiswa ID CAMP 2022 Learning Path React",
    createdAt: "2022-08-18T12:27:34.572Z",
    archived: true,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getData, showFormattedDate };
