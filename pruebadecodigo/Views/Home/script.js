
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
                latestNewsContainer.innerHTML = '<p>Error fetching data.</p>';
                oldNewsContainer.innerHTML = '<p>Error fetching data.</p>';
            });


