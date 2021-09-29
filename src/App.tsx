import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<any>(null);

  const [podnets, setPodnets] = useState<any[]>([
    {
      name: "Peťko",
      surname: "Mrkvička",
      address: "Adresa 27",
      description: "Lorem ipsum dolor?",
      image: "https://picsum.photos/seed/matej/300/200"
    },
    {
      name: "Milan",
      surname: "Novotný",
      address: "Adresa 455",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      image: "https://picsum.photos/seed/jakub/300/200"
    }
  ]);

  const addPodnet = () => {
    const newPodnet = {
      name,
      surname,
      address,
      description,
      image
    };

    setName("");
    setSurname("");
    setAddress("");
    setDescription("");
    setImage("");

    setPodnets([...podnets, newPodnet]);
  };

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage(URL.createObjectURL(img));

      event.target.value = null;
    }
  };

  const removePodnet = (indexToRemove: number) => {
    return () => {
      const newPodnets = podnets.filter(
        (_podnet, podnetIndex) => podnetIndex !== indexToRemove
      );
      setPodnets(newPodnets);
    };
  };

  return (
    <div className="holder">
      <h1 className="nadpis_pridaj">Pridať podnet</h1>

      <hr className="ciara" />

      <div className="formular">
        <label className="">Meno</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=""
          type="text"
        />

        <label className="">Priezvisko</label>
        <input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className=""
          type="text"
        />

        <label className="">Adresa</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className=""
          type="text"
        />

        <label className="">Popis</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className=""
          type="text"
        />

        <label className="">Obrázok</label>
        <input
          className=""
          type="file"
          name="myImage"
          onChange={onImageChange}
        />

        {image && <img src={image} className="nahlad_obrazku" alt="" />}

        <button onClick={addPodnet} className="pridat_button">
          Pridať
        </button>
      </div>

      <h1 className="nadpis_zoznam">Zoznam podnetov</h1>

      <hr className="ciara" />

      <div className="drziak_podnet">
        {podnets.map((podnet, podnetIndex) => {
          return (
            <div className="podnet">
              <h1 className="nadpis_podnet">
                {" "}
                {podnet.name} {podnet.surname} ({podnet.address}):{" "}
              </h1>
              <p className="podnet_text"> {podnet.description} </p>

              <img src={podnet.image} className="obrazok_podnet" alt="" />

              <button
                onClick={removePodnet(podnetIndex)}
                className="vymazat_button"
              >
                Vymazať
              </button>

              <hr className="ciara" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
