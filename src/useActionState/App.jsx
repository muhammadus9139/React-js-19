import { startTransition, useActionState, useEffect, useState, useTransition } from "react";


function App() {

  const handlesubmit = async (prevdata, formdata) => {
    let name = formdata.get('name');
    let password = formdata.get('password');


    await new Promise(res => setTimeout(res, 2000))
    // console.log("handlesubmit called", name, password);

    if (name && password) {
      return { message: 'Data submitted', name, password }
    }
    else {
      return { error: 'Failed to submit. please enter proper data', name, password }
    }
  }

  const [data, action, pending] = useActionState(handlesubmit, undefined);
  console.log(data)


  return (
    <div>
      <h1>useActionState hook in React js</h1>
      <form action={action}>
        <input defaultValue={data?.name} type="text" placeholder="Enter name" name="name" />
        <br /><br />
        <input defaultValue={data?.password} type="password" placeholder="Enter password" name="password" />
        <br /><br />
        <button disabled={pending}>Submit</button>
        <br />
      </form>

      {
        data?.error && <span style={{ color: "red" }}>{data?.error}</span>
      }

      {
        data?.message && <span style={{ color: "green" }}>{data?.message}</span>
      }

      <h3>Name: {data?.name}</h3>
      <h3>Password: {data?.password}</h3>
    </div>
  );

}

export default App;
