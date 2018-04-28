# TicTacToeTest
Try Tic-Tac-Toe


### 描述
1, homework 代码在 game-app/src/Fun.js, 单元测试在 game-app/src/Fun.test.js;

2, src下面是一个简单的HTML 井字棋人机游戏;


### Project Structure Indicate
 - src

    - index.html // Html TicTacToe simple game.

 - game-app // React project for TicTacToe simple game.

    - src

        - Fun.js // Get best position function

        - Fun.test.js // Unit test for Fun.js


### Run
##### src
```
Direct open index.html
```
##### game-app

```
$ cd game-app
$ npm i
$ yarn start
```
###### Unit Test
```
$ npm test
```

### Function Description
假设我们现在有一个 3 x 3 的井字棋游戏，我们用一个二维数组代表棋盘，’x’ 代表玩家 X 下的棋子，’o’ 代表玩家 O 下的棋子，’e’ 代表该格没有棋子。例如：
一个空白的棋盘以下面的二维数组表示

[ [‘e’, ‘e’, ‘e’],

  [‘e’, ‘e’, ‘e’],

  [‘e’, ‘e’, ‘e’] ]

如果玩家 X 在第一行第一列下了一步棋，玩家 O 在第二行第二列下了一步棋，则表示如下：

[ [‘x’, ‘e’, ‘e’],

  [‘e’, ‘o’, ‘e’],

  [‘e’, ‘e’, ‘e’] ]

现在需要一个 function，接受一个已有任意棋子的棋盘（和上面二维数组一样的格式），和玩家的标志（’x’ 或 ‘o'），返回该玩家下一步有几种可能的获胜方式（获胜方式以数组表示，[0, 0] 代表在第一行第一列下一步棋即可获胜，[2, 2] 代表在第三行第三列下一步棋即可获胜）。例如：

someFunction(

‘x’,

[ [‘o’, ‘e’, ‘e’],

  [‘o’, ‘x’, ‘o’],

  [‘x’, ‘x’, ‘e’] ]

)

// return [ [2, 2], [0, 1], [0, 2] ]

someFunction(

‘x’,

[ [‘x’, ‘o’, ‘o’],

  [‘x’, ‘x’, ‘e’],

  [‘e’, ‘o’, ‘e’] ]

)

// return [ [2, 2], [1, 2], [2, 0] ]
