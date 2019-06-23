### react  
#### 一、react基础   
##### 1.1 声明式编程  
命令式编程：命令式编程描述代码如何工作。  
声明式编程：声明式编程则表明想要实现什么目的。声明式编程中无须使用变量，也不用在执行过程中持续更新变量的值。事实上，声明式编程往往避免了创建和修改状态。   
##### 1.2 React 元素  
React 遵循声明式范式，因此无须告诉它如何与 DOM 交互。你只要声明希望
在屏幕上看到的内容，React 就会完成剩下的工作。  
```
{
 type: Title,
 props: {
 color: 'red',
 children: 'Hello, Title!'
 }
} 
```
如果 type 属性是字符串，那么元素就表示 DOM 节点；如果 type 属性是函数，那么元素就是组件。
DOM 元素和组件可以互相嵌套，以表示整个渲染树：
```
{
 type: Title,
 props: {
 color: 'red',
 children: {
 type: 'h1',
 props: {children: 'Hello, H1!'}
 }}} 
```
当元素的 type 属性是函数时，React 会调用它，传入 props 来取回底层元素。React 会一直
对返回结果递归地执行相同的操作，直到取回完整的 DOM 节点树，然后就可以将它渲染到屏幕。
这个过程称作一致性比较  
##### 1.3 忘掉所学的一切
React 的最终目标是将创建组件所用到的每项技术都封装起来，并根据它们的领域和功能进
行关注点分离。  
##### 1.4 常见误解  
可以通过引入两个文件去引入  
https://cdn.bootcss.com/react/15.3.2/react.min.js   
https://cdn.bootcss.com/react/15.3.2/react-dom.min.js   
但是无法使用jsx语法糖  
对于简单的 UI，只需使用 createElement 方法。只有当开发更复杂的 UI 时，才需要引入
转译器来启用 JSX 语法并将其转换成 JavaScript。   
###### cli  
npm install -g create-react-app   
create-react-app hello-world  
npm start  
##### 1.5 小结  
我们在本章中学习了一些基本概念   
#### 二、整理代码  
##### 2.1 JSX   
React 提供了两种定义元素的方式。一种是使用 JavaScript 函数，另一种是使用类似 XML 的
JSX 语法。  
###### 2.1.1 Babel   
我们想在浏览器这个目标环境中使用尚未实现的语言特性  
安装（全局） npm install --global babel-cli   
使用： babel source.js -o output.js    
###### 2.1.2 Hello，World！  
用 React 的 createElement 函数创建 div 元素：
```
React.createElement('div') 
```  
JSX 写法：
```
<div /> 
```
运行 Babel 时会将`<div/>`转换成React.createElement('div')
###### 2.1.3 DOM 元素与 React 组件  
HTML元素和React元素；唯一的区别在于它们是否以大写字母开头。  
渲染 HTML 按钮元素时使用`<button />`
```
React.createELement('button') 
```
渲染 Button 组件时使用`<Button />`
```
React.createElement(Button) 
```
前一个调用传入了字符串形式的DOM元素类型，而后者传入了组件本身，这也意味着该组件要存在于当前作用域。  
###### 2.1.4 属性  
JavaScript 的等效写法如下所示：
```
React.createElement("img", {
 src: "https://facebook.github.io/react/img/logo.svg",
 alt: "React.js"
}); 
```  
###### 2.1.5 子元素  
嵌套   等效的 JavaScript 代码如下所示：
```
React.createElement(
 "div",
 null,
 React.createElement(
 "a",
 { href: "https://facebook.github.io/react/" },
 "Click me!"
 ) 
 ``` 
 JSX 的妙处在于没有限制只能将元素嵌套为其他元素的子元素，还可以使用函数或变量这样
的 JavaScript 表达式。  

###### 2.1.6 JSX 与 HTML 的区别  
1. 属性   
有些属性无法使用。比如，我们需要用 className 取代 class，用 htmlFor 取代 for：  
2. 样式  
非常明显的区别之一就是样式属性的工作原理。  
3. 根元素  
JSX 和 HTML 之间还有一个很重要的区别值得一提，因为 JSX 元素会转换为 JavaScript 函数，
但 JavaScript 不允许返回两个函数，因此如果有多个同级元素，需要强制将它们封装在一个父元
素中。  
4. 空格  
js代码会将空格编译出来  jsx因为生成独立子元素，所以没有空格  
5. 布尔值属性  
如果设置某个属性却没有赋值，那么 JSX 会默认其值是 true，这意味着如果要将属性值设置为 false，则需要显式地声明。  

###### 2.1.7 展开属性 
引发的 bug 更少，写出的组件更稳健且更不易出错。
```
const foo = { id: 'bar' }
return <div {...foo} />
```
以上代码的转译结果如下所示：
```
var foo = { id: 'bar' };
return React.createElement('div', foo); 
```  
###### 2.1.8 JavaScript 模板  
展开属性就是一个示例，另一个明显的示例是可以用双花括号封装 JavaScript 表达式以作为
属性值：   
###### 2.1.9 常见模式  
1. 多行书写  
需要嵌套元素的任何情况下都应该多行书写：  
如果出现子节点不是元素，而是文本或变量这样的例外情况，那么应该和父节点的标签写在
同一行，并避免产生混淆   
多行书写元素时，一定要记得用括号封装它们。JSX 本质上会替换成函数，由于自动分号插
入机制的存在，另起一行的函数可能会导致意外结果
以下示例可以正常运行，因为 div 元素和返回在同一行：
```
return <div />
```
但接下来的示例就失效了：
```
return
 <div />
 ```
因为它会转换为以下代码：
```
return;
React.createElement("div", null);
```
因此你需要将代码语句包裹在括号内：
```
return (
 <div />
) 
```  
2. 多个属性的书写   
一行书写一个属性，同时缩进一个层级，并保持结尾括号和开始标签对齐：  
```
<button
 foo="bar"
 veryLongPropertyName="baz"
 onSomething={this.handleSomething}
/> 
```  
3. 条件语句  
JSX 可以利用行内条件来判断：
```
<div>
 {isLoggedIn && <LoginButton />}
</div> 
```  
三元条件运算替换if else   
函数  
```
canShowSecretData() {    const { dataIsReady, isAdmin, userHasPermissions } = this.props   return dataIsReady && (isAdmin || userHasPermissions) } 
 
<div>   {this.canShowSecretData() && <SecretData />} </div>
```  
getter方法来取代函数   
```
get canShowSecretData() {    
const { dataIsReady, isAdmin, userHasPermissions } = this.props   
return dataIsReady && (isAdmin || userHasPermissions) 
} 
<div>   {this.canShowSecretData && <SecretData />} </div>
```  
也可以用于计算属性  
```
getPrice() {
    return `${this.props.currency}${this.props.value}` 
} 
<div>{this.getPrice()}</div>
```
一些方案需要用到外部依赖   
第一项方案是 render-if，可以执行以下命令来安装：   
npm install --save render-if    
```
const { dataIsReady, isAdmin, userHasPermissions } = this.props 
const canShowSecretData = renderIf(    
dataIsReady && (isAdmin || userHasPermissions) 
) 
<div>   {canShowSecretData(<SecretData />)} </div> 
```
我们将条件语句封装进 renderIf 函数。   
这个工具函数的返回值也是一个函数，可以接收 JSX标记作为参数，当条件为 true 时显示。   
react-only-if   
有了它之后，可以通过高阶组件来设置条件函数，只需要按照条件为真的情 况编写组件即可   
npm install --save react-only-if   
```
const SecretDataOnlyIf = onlyIf(  
        ({ dataIsReady, isAdmin, userHasPermissions }) => {     
        return dataIsReady && (isAdmin || userHasPermissions)   
        } 
    )(SecretData) 
    <div>   
        <SecretDataOnlyIf     
            dataIsReady={...}     
            isAdmin={...}    
            userHasPermissions={...}  
        /> 
    </div>
```
在以上代码中，组件内部不包含任何逻辑。将条件语句作为onlyIf函数的第一个参数传入，满足条件时就渲染组件    
4. 循环   
```
<ul>   
    {users.map(user =><li>{user.name}</li>)} 
</ul> 
```
5. 控制语句    
我们的目的是从组件中移除所有逻辑，尤其是渲染方法中的。但有时需要根据应 用的状态来显示或隐藏元素，经常还需要遍历集合与数组。    
如果你认为用 JSX 完成此类需求可以提高代码可读性，可以直接用现成的 Babel 插件： jsx-control-statements。    
npm install --save jsx-control-statements   
安装完成后，将它添加到.babelrc文件中的 Babel插件列表。    
```
"plugins": ["jsx-control-statements"]
```   
```
<If condition={this.canShowSecretData}>   <SecretData />  </If>
```
它会转译为三元表达式，如下所示： 
```
{canShowSecretData ? <SecretData /> : null} 
```
















