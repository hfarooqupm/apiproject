# apiproject
# News API Integration - HTML Example

This is a simple web page that fetches news data from an API and categorizes them into "latest" and "old" news based on a specified date.

## Description

This web page demonstrates how to use JavaScript to fetch news data from an API and display it in different categories. The news data is categorized into "latest" and "old" based on a specified cutoff date. The fetched data is then displayed using HTML and Bootstrap for styling.

## HTML CODE : This is the Index.cshtml code in VS project
<!DOCTYPE html>
<html>
<head>
    <title>Noticias utilizando APIS</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container mt-5">
        <h1 class="jumbotron text-center">Noticias utilizando API by Hamza</h1>
        <div class="row" id="noticiasnuevas">
            <h2 class="jumbotron text-center">Últimas Noticias</h2>
            <!-- Las ultimas noticias aqui -->
        </div>
        <div class="row" id="noticiasantiguas">
            <h2 class="jumbotron text-center ">Noticias Antiguas</h2>
            <!-- Mas antiguas aqui -->
        </div>
    </div>
    <script>
        const apiUrl = 'https://saurav.tech/NewsAPI/everything/bbc-news.json';

        const latestNewsContainer = document.getElementById('noticiasnuevas');
        const oldNewsContainer = document.getElementById('noticiasantiguas');

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'ok') {
                    const currentDate = new Date('2022-05-05');
                    data.articles.forEach(article => {
                        const articleCard = document.createElement('div');
                        articleCard.classList.add('col-md-6');
                        articleCard.innerHTML = `
                        <div class="card">
                            <img src="${article.urlToImage}" style="width:50px;height:60px;" alt="News Image">
                            <div class="card-body">
                                <h5 class="font-italic">${article.title}</h5>
                                <p class="card-text">${article.description}</p>
                                <p class="text-primary">${article.content}</p>
                                <a href="${article.url}" target="_blank" class="btn btn-primary">Clic aqui para pagina oficial y leer mas en detalle</a>
                            </div>
                        </div>
                    `;

                        const articleDate = new Date(article.publishedAt);
                        if (articleDate >= currentDate) {
                            latestNewsContainer.appendChild(articleCard);
                        } else {
                            oldNewsContainer.appendChild(articleCard);
                        }
                    });
                } else {
                    latestNewsContainer.innerHTML = '<p>Error fetching news data.</p>';
                    oldNewsContainer.innerHTML = '<p>Error fetching news data.</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                latestNewsContainer.innerHTML = '<p>Error al obtener datos</p>';
                oldNewsContainer.innerHTML = '<p>Error al obtener datos</p>';
            });

    </script>
</body>
</html>

## Website
Here you can see the website view how its look like the previous code I mentioned.
![image](https://github.com/hfarooqupm/apiproject/assets/78760561/60f95a1c-208d-4028-a615-8bfce6d732d8)
![image](https://github.com/hfarooqupm/apiproject/assets/78760561/a6cd985a-d38b-4b60-9e37-a18f37e6633c)
![image](https://github.com/hfarooqupm/apiproject/assets/78760561/618fcbf0-83b9-4a8e-8fc9-bebacd98c0a9)



## Author

- Hamza [GitHub](https://github.com/hfarooqupm)




