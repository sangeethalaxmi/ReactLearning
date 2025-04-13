#learn react from start to end and implement the concepts
#parcel
#it is setting up server for us
#it is automatically loading changes to ui --> it is doing hmr -->hot module replacement
#how it do ?? ..it is done using file watching algorithm --> written with c++
#parcel is cacheing -->it caches the files in parcel-cache ..> it watches the code change
#during first time it takes more time and on subsequent builds it takes cache of code and runs the code faster
#pracel will do image optimisation
#when we make production build it will minify the file .. it will do bundle
#compress your file-->remove all empty space everything
#react alone is not making application fast ..it is because of bundler like vite,parcel etc to do it and optimise it
#parcel
1.dev build
2.hmr
3.local server
4.file watching algorithm
5.image optimisation
6.minifcation
7.compression
8.bundling
9.consistant hashing --> what it is?
10.it will do code spliting
11.differnetial bundling ---> app can be opened in any browser old or new .. parcel will give different bundles for different type of older or new browser
12.diganoies -> gives better error suggestions
13.host app in https
14.tree shaking --> in whole code if we are using only 5 functions then it will remove unused remaining code
16.different dev and production build

#parcel --> it done all above with many packages --> parcel is like manager for all other packages
