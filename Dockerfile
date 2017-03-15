FROM kyma/docker-nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY build/ /var/www
COPY public/ /var/www

CMD 'nginx'
