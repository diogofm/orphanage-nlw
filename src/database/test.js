const Database = require("./db.js");
const saveOrphanages = require("./saveOrphanage");

Database.then(async (db) => {
  await saveOrphanages(db, {
    lat: "-27.222633",
    lng: "-49.6455874",
    name: "Larica dos Moleques",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "1681688",
    images: [
      "https://images.unsplash.com/photo-1600063296677-1bb44cd2c615?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1598252976330-b8a1461d47a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 00h até 9h",
    open_on_weekends: "0",
  });

//   const selectedOrphanages = await db.all("SELECT * FROM orphanages");
//   console.log(selectedOrphanages);

//   const orphange = await db.all('SELECT * FROM orphanages WHERE id = "5"');
//   console.log(orphange);
});
