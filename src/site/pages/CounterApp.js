import React, { useEffect, useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const [itemName, setItemName] = useState("SubhanAllah");
  const [listTas, setListTas] = useState([]);
  const [authUser, setAuthUser] = useState([]);
  const [list, setList] = useState([
    {
      id: 1,
      name: "SubhanAllah",
      img: "img1",
    },
    {
      id: 2,
      name: "AlHamdullilah",
      img: "img1",
    },
    {
      id: 3,
      name: "AllahuAkbar",
      img: "img1",
    },
    {
      id: 4,
      name: "Astaghfirullah",
      img: "img1",
    },
    {
      id: 5,
      name: "La ilaha illallah",
      img: "img1",
    },
    {
      id: 6,
      name: "La hawla Wala Quwwata Illa Billah",
      img: "img1",
    },
  ]);

  useEffect(() => {
    let fetchList = localStorage.getItem("tasbihList");
    fetchList = JSON.parse(fetchList);
    setListTas(fetchList);
    if (fetchList === null) {
      let dataInStr = JSON.stringify([]);
      localStorage.setItem("tasbihList", dataInStr);
    }

    let fetchUser = localStorage.getItem("AuthenticatedUser");
    fetchUser = JSON.parse(fetchUser);
    setAuthUser(fetchUser);
    if (fetchUser === null) {
      let dataInStr = JSON.stringify([]);
      localStorage.setItem("AuthenticatedUser", dataInStr);
    }
  }, []);

  const openCounter = (item) => {
    setItemName(item.name);
    let finding = listTas.filter((i) => i.name === item.name);
    if (finding) {
      setCounter(finding.length);
    } else {
      setCounter(0);
    }
  };

  const startCounter = () => {
    setCounter(counter + 1);

    let data = {
      name: itemName,
      count: counter,
      email: authUser.email,
    };

    let listTasClone = listTas.slice(0);
    listTasClone.push(data);
    setListTas(listTasClone);
    let newList = JSON.stringify(listTasClone);
    localStorage.setItem("tasbihList", newList);
  };

  const resetCounter = () => {
    let finding = listTas.filter((i) => i.name !== itemName);
    setCounter(0);
    setListTas(finding);
    let updateList = JSON.stringify(finding);
    localStorage.setItem("tasbihList", updateList);
  };
  return (
    <>
      <h2>Counter App</h2>
      <div style={{ margin: "20px 0" }}>
        <ul>
          {list.map((item) => {
            return (
              <li key={item.id} onClick={() => openCounter(item)}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cApp">
        <h1>{itemName}</h1>
        <h2>{counter}</h2>
        <button
          onClick={startCounter}
          style={{ margin: 10, padding: 10, fontSize: 16 }}
        >
          Start
        </button>
        <button
          onClick={resetCounter}
          style={{ margin: 10, padding: 10, fontSize: 16 }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default CounterApp;
