import GameList from './GameList'

export default {
  title: 'components/Game List',
  component: GameList,
}

const gameListMock = [
  {
    "title": "Maternal",
    "games": [
      {
        "title": "Contação de história - Um passarinho me contou",
        "type": "AULA",
        "comp": [
          "Língua Portuguesa"
        ],
        "BNCC": [
          "EI01EF08 - Participar de situações de escuta de textos em diferentes gêneros textuais (poemas, fábulas, contos, receitas, quadrinhos, anúncios etc.).Participar de situações de escuta de textos em diferentes gêneros textuais (poemas, fábulas, contos, receitas, quadrinhos, anúncios etc.).",
          "EI02EF03 - Demonstrar interesse e atenção ao ouvir a leitura de histórias e outros textos, diferenciando escrita de ilustrações, e acompanhando, com orientação do adulto-leitor, a direção da leitura (de cima para baixo, da esquerda para a direita).Demonstrar interesse e atenção ao ouvir a leitura de histórias e outros textos, diferenciando escrita de ilustrações, e acompanhando, com orientação do adulto-leitor, a direção da leitura (de cima para baixo, da esquerda para a direita",
          "EI03EF07 - Levantar hipóteses sobre gêneros textuais veiculados em portadores conhecidos, recorrendo a estratégias de observação gráfica e/ou de leitura.Levantar hipóteses sobre gêneros textuais veiculados em portadores conhecidos, recorrendo a estratégias de observação gráfica e/ou de leitura.",
          "EF15LP16 - Leitura colaborativa e autônoma. Leitura/escuta (compartilhada e autônoma).Ler e compreender, em colaboração com os colegas e com a ajuda do professor e, mais tarde, de maneira autônoma, textos narrativos de maior porte como contos (populares, de fadas, acumulativos, de assombração etc.) e crônicas."
        ]
      },
      {
        "title": "Causa e efeito",
        "type": "JOGO",
        "comp": [
          "Espaços, Tempos, Quantidades, Relações E Transformações"
        ],
        "BNCC": [
          "EI01ET02 - Explorar relações de causa e efeito (transbordar, tingir, misturar, mover e remover etc.) na interação com o mundo físico.Explorar relações de causa e efeito (transbordar, tingir, misturar, mover e remover etc.) na interação com o mundo físico."
        ]
      }
    ]
  }
]

export const Default = () => <GameList stages={gameListMock} />
