const First = ({isopen})=> {
    return (
      <div>
       {isopen ? (<b>open</b>):(<b>closed</b>)}
  
      </div>
    );
  }
  
  export default First;
  