photo-template.jsx : c'est la page complète d'un "moment"
  photo-template.jsx -> ```<MDX>{photoNode.body}</MDX>```

photo.jsx: c'est la page complète /photo
  photo.jsx -(imports)> ```<PhotogrammetryMagazine />```

photoGrid.jsx: c'est pour les photos affichées sur la page d'accueil

Aussi, changements à faire dans : 
  gatsby-node
  gatsby-config

PhotoCard et PhotoHero utilisés nulle part. Ca doit être des vieux trucs.


TODO
corriger regex photo -> posttype dand gatsby node for photos. Et corrgier aussi pour photogrammetry
Check photos sizes on home page