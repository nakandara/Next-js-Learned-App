import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  if (params.length === 2) {
    return (
      <h1 className="bg-green-400">
        Viewi docs params one {params[0]} and params two {params[1]}
        <hr />
      </h1>
    );
  } else if (params.length === 3) {
    return (
      <h1 className="bg-pink-600">
        Viewi docs params one {params[0]} and params two {params[1]} and params
        3 {params[2]}
        <hr />
      </h1>
    );
  } else {
    return <div className="bg-yellow-400">Doc layout Page {params}</div>;
  }

  return <div>Doc layout Page {params}</div>;
}

export default Doc;
