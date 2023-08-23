![Banner do jogo Número secreto](https://github.com/Emanuelmts/numero-secreto-game/assets/44686829/1a8b96c2-8963-4824-af40-f38e971842a6)

# Jogo número secreto!
![Static Badge](https://img.shields.io/badge/status-em_constru%C3%A7%C3%A3o-red)
![Static Badge](https://img.shields.io/badge/primeira_vers%C3%A3o-Agosto_2023-green)

🚧 Próximo passo: implementação de vidas 🚧

Jogo baseado em adivinhaação de número pseudo-aleatório escolhido para ser adivinhado pelo jogador utilizando seu microfone!


## 🌐 Acesso
Para acessar o jogo, você pode utilizar o deploy online <a href="https://numero-secreto-game-ten.vercel.app/" target="_blank" rel="noopener noreferrer">clicando aqui</a> e se divertindo!

Para finalizar o jogo, acerte o número ✅ ou diga "GAME OVER" ❌

## Tecnologias utilizadas:
- `Javascript`
- `Web Speech API`

Utilizado `SpeechRecognition` da API para reconhecimento de voz e digitação de voz.

Sendo iniciado no projeto com:

```Javascript
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()
```

E para a continuidade do reconhecimento de voz durante o jogo:

```Javascript
recognition.addEventListener('end', () => recognition.start())
```

## 📨 Contato
Emanuel Teixeira - [Linkedin](https://www.linkedin.com/in/emanuelct/)
