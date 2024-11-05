// Função para converter números em palavras
function numeroParaPalavra(num) {
    const palavras = [
        "0%", "10%", "20%", "30%", "40%", "50%",
        "60%", "70%", "80%", "90%", "100%"
    ];
    return palavras[num] || num.toString(); // Retorna o número como string se não estiver na lista
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Snapchat'],
        datasets: [{
            label: 'Popularidade',
            data: [85, 90, 75, 60, 55], // Percentuais de popularidade
            backgroundColor: [
                'rgba(255, 0, 255, 0.2)', // Magenta
                'rgba(255, 0, 255, 0.2)', // Magenta
                'rgba(255, 0, 255, 0.2)', // Magenta
                'rgba(255, 0, 255, 0.2)', // Magenta
                'rgba(255, 0, 255, 0.2)' // Magenta
            ],
            borderColor: [
                'rgba(255, 0, 255, 1)', // Magenta
                'rgba(255, 0, 255, 1)', // Magenta
                'rgba(255, 0, 255, 1)', // Magenta
                'rgba(255, 0, 255, 1)', // Magenta
                'rgba(255, 0, 255, 1)' // Magenta
            ],
            borderWidth: 1,
            datalabels: {
                anchor: 'end',
                align: 'end',
                formatter: (value) => numeroParaPalavra(value), // Converte os números em palavras
                color: '#FF00FF' // Cor magenta para os rótulos de dados
            }
        }]
    },
    options: {
        plugins: {
            datalabels: {
                display: true,
                color: '#FF00FF', // Cor magenta para o texto dos rótulos
                font: {
                    weight: 'bold'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#FF00FF' // Cor magenta para os rótulos dos meses
                },
                title: {
                    display: true,
                    text: 'Redes Sociais',
                    color: '#FF00FF'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#FF00FF', // Cor magenta para os rótulos dos números
                    callback: function(value) {
                        return numeroParaPalavra(value); // Substitui os números por palavras
                    }
                },
                title: {
                    display: true,
                    text: 'Popularidade (%)',
                    color: '#FF00FF'
                }
            }
        },
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        elements: {
            bar: {
                borderWidth: 2, // Espessura das bordas das barras
                borderSkipped: 'bottom' // Impede a borda embaixo das barras
            }
        }
    },
    plugins: [ChartDataLabels] // Inclui o plugin
});
