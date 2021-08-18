# Beauty Colors <3
> `https://htmlcolorcodes.com/`


# React Basics

To create an application using react first we need to use:
```
npx creat-react-app
```
This way we're going to create an app whitout installing the command on local machine, using only one time than removing the command after its completion, that's why we use `npx`.

It will take couple of minutes do create the app, that's normal.

React use JSX (Javascript Sintax) to render elements, so we're gonna need, always, the react import:
> Always import as `React` (with capital R) because it's the Object that converts HTML tags using `JSX`
```javascript
import ReactDOM from 'react-dom'
import React from 'react'

ReactDOM.render(
  <div>Hello World!</div>,
  document.getElementById('root')
)
```

Using Tags right after the return statement it works fine, but if you try to organize your code by indenting it, it will break, so a work arround is using parentesis to return:

<h3>Wrong</h3>

```javascript
return
  <div>
    <h1>Hello World!</h1>
  </div>
```

<h3>Correct</h3>

```javascript
return (
  <div>
    <h1>Hello World!</h1>
  </div>
)
```
or
```javascript
return <div>
    <h1>Hello World!</h1>
  </div>
```
<br />

> There are two types of components: The `Function` components and `Class` components:

```javascript
function first() {
  return <b>Hi</b>
}
```

> When you're using `jsx` from react somethings can't work like you're coding `html` files like the attr `class` to set a class from css to a tag, because `Class` is resctrict use to define some Class using typescript, so what we need to use is `className`.

```html
<div className="myClass">
  ...
</div>
```

React does know if you're using `.js` or `.jsx`, it's more easy to use `.jsx` because your IDE can complete more easily

This is like passing a real number to a component property: 
```html
<Component note={11.2} />
```

> `Props` are `readonly`, different from `VueJS` that you can work with props and change it, like a `v-model` or something. If you need to change some data, you can use the state (to be learned)

<br />

# React Fragments

`React Fragments` (React.Fragment) are used to envolve the HTML tags without render itself. This way you'll not need the use of a `div` to envolve all code that you wanna render.

It can be used like this:

<h3>Complete, that can be passed props to it</h3>

```html
<React.Fragment someProp>
  <h1>Hello</h1>
</React.Fragment>
```

<h3>Or simplified but can not use props</h3>

```html
<>
  <h1>Hello</h1>
</>
```

> When you're using arrow function you can pass parameters ( `someFn = (props) => {}` or `someFn = props => {}` ) you can use anonymous function ( `(props) => {}` or `props => {}` ) or you can tell implicitly that you will not even use this function by using `underscore` ( `_ => stuff` ).


<h2>Spread</h2>

`...` spread
```javascript
let arr = [...incArr]
```

<h1>Controlled Components</h1>

Controlled components are the basics html components like `input`, `select`... They need to be controlled by their state because they are absolute, its value can not be changed. To do so we need to change their state like this:

```js
import React, { useState } from 'react'


export default props => {

  const [valor, setValor] = useState('inicial')

  const onChanged = (e) => {
    setValor(e.target.value)
  }

  return (
    <div>
      <input type="text" value={valor} onChange={onChanged} />
    </div>
  )
}
```

> `state` always will change the state of the attributes inside a component, Function (`useState`) or Class (`setState`) component.

<h2>About the mothods inside a Class Component</h2>

In react the prop THIS does not work like other O.O. languages, so we need to tell it what is the Object it is working with at the moment the code bellow it one way to do it, an old method, not much used this days:

```js
  state = {
    numero: this.props.valorInicial
  }

  inc() {
    this.setState({
      numero: this.state.numero + 1
    })
  }
  constructor(props) {
    super(props)
    this.inc = this.inc.bind(this)
  }
```

Using a arrow function is the way to go because Arrow Functions are included in the context of the Object (file) that was writen:

```js
  inc = () => {
    this.setState({
      numero: this.state.numero + 1
    })
  }
```

Or you can use the arrow function where the method was called:

```js
  inc() {
    this.setState({
      numero: this.state.numero + 1
    })
  }
```
```html
  <button onClick={ e => this.inc }>+</button>

  <!-- or, because event is not used -->

  <button onClick={ _ => this.inc }>+</button>
```
