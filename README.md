# C*rcas?onne®

Run on development mode:

```
git clone https://github.com/cagdass/carcassonne & cd carcassonne
npm install
npm start
```

[t1]: https://github.com/cagdass/carcassonne/blob/master/src/assets/images/tiles/Blodkorv.png?raw=true "Blodkorv"
[t2]: https://github.com/cagdass/carcassonne/blob/master/src/assets/images/tiles/Semla.png?raw=true "Semla"

### Short-term plans:

- Encode all tile properties within each unique tile type:
  * Encode each edge
  * Encode where it is possible to place a meeple on the tile
  * Encode where to place a farmer
  * Encode the separation of grass
  * Consider how to represent the semantic difference in the following tiles: 
  * ![alt text][t1]
  * ![alt text][t2]
 
- Checking if two tiles can be placed adjacently
- Automatically place a tile when dropped after having been dragged adjacent to a tile or tiles that it can be placed next to
  
### Mid-term (tbt) plans:

- Add networking

### Long-term plans:

* Do the expansions!

#### Just us things:

* The tiles are named after Swedish (mostly) food-related vocabulary