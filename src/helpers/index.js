const dateAndTimeTransformer = (timeStamp) => {
  let date = new Date(timeStamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  let time = new Date(timeStamp).toLocaleTimeString('en-US', { hour: '2-digit', minute:'2-digit', hour12: true }).split('/');
  return `${date}, ${time}`
}

export default dateAndTimeTransformer;