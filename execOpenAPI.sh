#!/bin/bash
docker run -d --init --rm -v $(pwd):/tmp -p 4010:4010 stoplight/prism:4 mock -h 0.0.0.0 "/tmp/openapi.yml"

ID=(`docker container ps -f ancestor=stoplight/prism:4 --format "table {{.ID}}" `)
echo "Container ID:"${ID[2]}
echo "モックサーバーが起動しました。"

Query=(`docker inspect ${ID[2]} | grep \"IPAddress\"\:`)
IP=(`echo ${Query[1]}| sed 's/^.*"\(.*\)".*$/\1/'`)

echo  "http://"$IP"でアクセスできます。"
read -p "Enterでサーバーを終了します"
docker stop ${ID[2]}
