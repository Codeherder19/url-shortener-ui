

export const addUrl = (url) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(url)
    };

    return (
      fetch('http://localhost:3001/api/v1/urls', options)
    );
  }
