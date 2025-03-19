#!/bin/bash

# Criar diretórios se não existirem
mkdir -p public/images/banners
mkdir -p public/images/moments

# Download das imagens
# Banner
curl -o public/images/banners/banner-despedida.jpg "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1920&q=80"

# Momento 3
curl -o public/images/moments/momento3.jpg "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"

# Instalar sharp se necessário
npm install -g sharp-cli

# Otimizar imagens usando o sharp
sharp -i public/images/banners/banner-despedida.jpg -o public/images/banners/banner-despedida.jpg --quality 80
sharp -i public/images/moments/momento3.jpg -o public/images/moments/momento3.jpg --quality 80 