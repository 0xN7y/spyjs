import asyncio
import websockets 



p = 8000

async def e(websocket,path):
    print(".")
    async for m in websocket:
        print(m)

s = websockets.serve(e,"0.0.0.0",p)
asyncio.get_event_loop().run_until_complete(s)
asyncio.get_event_loop().run_forever()



