#!/bin/bash

# Criar diretórios necessários
mkdir -p public/images/{banners,features,looks,moments,avatars}

# URLs das imagens (exemplos do Unsplash/Pexels - todas livres de direitos autorais)
declare -A IMAGES=(
  # Banners
  ["banners/banner-despedida.jpg"]="https://images.unsplash.com/photo-1515035701882-77b6a0c4b48e"
  ["banners/banner-welcome.jpg"]="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
  
  # Features
  ["features/feature-memories.jpg"]="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
  ["features/feature-planning.jpg"]="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
  ["features/feature-looks.jpg"]="https://images.unsplash.com/photo-1523359346063-d879354c0ea5"
  ["features/feature-roles.jpg"]="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
  ["features/feature-sharing.jpg"]="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
  
  # Looks
  ["looks/look-camisetas.jpg"]="https://images.unsplash.com/photo-1523359346063-d879354c0ea5"
  ["looks/look-fantasia.jpg"]="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
  ["looks/look-praia.jpg"]="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
  ["looks/look-noite.jpg"]="https://images.unsplash.com/photo-1515035701882-77b6a0c4b48e"
  ["looks/look-spa.jpg"]="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
  ["looks/look-tematico.jpg"]="https://images.unsplash.com/photo-1523359346063-d879354c0ea5"
  
  # Moments
  ["moments/momento1.jpg"]="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
  ["moments/momento2.jpg"]="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
  ["moments/momento3.jpg"]="https://images.unsplash.com/photo-1515035701882-77b6a0c4b48e"
  ["moments/momento4.jpg"]="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
  
  # Avatars
  ["avatars/avatar-default.jpg"]="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
)

# Instalar sharp-cli se não estiver instalado
if ! command -v sharp &> /dev/null; then
    npm install -g sharp-cli
fi

# Download e otimização das imagens
for dest in "${!IMAGES[@]}"; do
    url="${IMAGES[$dest]}"
    echo "Baixando $dest..."
    
    # Criar diretório se não existir
    mkdir -p "public/images/$(dirname "$dest")"
    
    # Baixar imagem
    curl -s "$url" -o "public/images/$dest"
    
    # Otimizar imagem
    sharp "public/images/$dest" \
        -resize 1200 \
        -jpeg '{"quality": 80, "progressive": true}' \
        -o "public/images/$dest"
    
    echo "✓ $dest processada"
done

echo "Todas as imagens foram baixadas e otimizadas!" 