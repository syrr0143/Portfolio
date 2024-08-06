fetch('.env')
    .then(response => response.text())
    .then(data => {
        const vars = data.split('\n').reduce((acc, line) => {
            const [key, value] = line.split('=');
            acc[key] = value;
            return acc;
        }, {});

        Object.keys(vars).forEach(key => {
            localStorage.setItem(key, vars[key]);
        });
    })
    .catch(error => console.error('Error loading .env file:', error));