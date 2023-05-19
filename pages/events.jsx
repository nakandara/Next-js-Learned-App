import { useRouter } from "next/router";
import { useState } from "react";

function EventList({ EventList }) {
  const [first, setfirst] = useState(EventList);
  const router = useRouter();

  const ftchEventsSports = async () => {
    const response = await fetch("http://localhost:4000/events?categroy=sport");
    const data = await response.json();
    setfirst(data);
    router.push("events?categroy=sport", undefined, { shallow: true });
    console.log(data, ":::::::::::");
  };

  return (
    <>
      <button className="bg-red-200" onClick={ftchEventsSports}>
        Fetch Sport
      </button>
      <h1> list of events</h1>
      {first.map((event) => {
        return (
          <div key={event.id}>
            <h2 className="bg-green-500 shadow-lg">
              {event.id}
              {event.date} | {event.categroy}
            </h2>
            <p>{event.description}</p>
          </div>
        );
      })}
    </>
  );
}

export default EventList;
export async function getServerSideProps(context) {
  const { query } = context;
  const { categroy } = query;
  const queryString = categroy ? "categroy=sport" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();
  console.log(data, "gggggggggg");

  return {
    props: {
      EventList: data,
    },
  };
}
