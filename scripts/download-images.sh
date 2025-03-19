#!/bin/bash

# Criar diretórios necessários
mkdir -p public/images/{banners,features,looks,moments,bridesmaids}

# URLs das imagens (exemplos do Unsplash/Pexels - todas livres de direitos autorais)
declare -A IMAGES=(
  # Banners
  ["banners/banner-despedida.jpg"]="https://images.unsplash.com/photo-1541943181603-d8fe267a5dcf?w=1920&q=80"
  
  # Moments
  ["moments/momento1.jpg"]="https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=800&q=80"
  ["moments/momento2.jpg"]="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80"
  ["moments/momento3.jpg"]="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80"
  ["moments/momento4.jpg"]="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80"
  
  # Bridesmaids
  ["bridesmaids/mariana.jpg"]="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80"
  ["bridesmaids/juliana.jpg"]="https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=400&q=80"
  
  # Features
  ["features/feature-memories.jpg"]="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
  ["features/feature-planning.jpg"]="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
  ["features/feature-looks.jpg"]="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=800&q=80"
  ["features/feature-roles.jpg"]="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80"
  ["features/feature-sharing.jpg"]="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
  
  # Looks
  ["looks/look-camisetas.jpg"]="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=800&q=80"
  ["looks/look-fantasia.jpg"]="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
  ["looks/look-praia.jpg"]="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
  ["looks/look-noite.jpg"]="https://images.unsplash.com/photo-1515035701882-77b6a0c4b48e?w=800&q=80"
  ["looks/look-spa.jpg"]="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80"
  ["looks/look-tematico.jpg"]="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=800&q=80"
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