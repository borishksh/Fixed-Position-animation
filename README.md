
<h1>Cube Component</h1>

<p>A React component rendering a rotating cube with customizable color and size using Three.js.</p>

<h2>Usage</h2>

<pre><code>&lt;script type="text/javascript" src="./components/Cube"&gt;&lt;/script&gt;

&lt;script type="text/javascript"&gt;
    const App = () => {
        return &lt;Cube color={0x00ff00} size={1} /&gt;;
    };
&lt;/script&gt;
</code></pre>

<h2>Props</h2>

<ul>
    <li><strong>color (optional)</strong>: Hexadecimal color (default: <code>0x00ff00</code>).</li>
    <li><strong>size (optional)</strong>: Cube size (default: <code>1</code>).</li>
</ul>

<h2>Features</h2>

<ul>
    <li>Scene, camera, and renderer setup.</li>
    <li>Responsive cube rotation.</li>
    <li>Cleanup on unmount.</li>
</ul>

<h2>Dependencies</h2>

<ul>
    <li>React</li>
    <li>Three.js</li>
</ul>

<h2>Installation</h2>

<ol>
    <li>Install dependencies:</li>
</ol>

<pre><code>$ npm install react three
</code></pre>

<ol start="2">
    <li>Copy <code>Cube.js</code> to your components.</li>
    <li>Use the <code>Cube</code> component.</li>
</ol>

<p>Enjoy the rotating cube! 🚀</p>
