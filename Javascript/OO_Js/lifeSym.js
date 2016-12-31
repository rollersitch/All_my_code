var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

var directions = {
      "n":  new Position(0,-1),
      "ne": new Position(1,-1),
      "e":  new Position(1,0),
      "se": new Position(1,1),
      "s":  new Position(0,1),
      "sw": new Position(-1,1),
      "w":  new Position(-1,0),
      "w": new Position(-1,-1)
};


var directionNames = "n ne e se s sw w nw".split(" ");

function BouncingCritter() {
      this.direction = randomElement(directionNames);
}
BouncingCritter.prototype.act = function(view) {
      if(view.look(this.direction) != " ")
            this.direction = view.find(" ") || "s";
      return {type: "move", direction: this.direction};
};

function randomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
}




function Position(x,y) {
      this.x = x;
      this.y = y;
}

Position.prototype.plus = function(other) {
      return new Position(this.x + other.x, this.y + other.y);
};

/*
var grid = [
            "top left", "top middle", "top right",
            "bottom left", "bottom middle", "bottom right"
            ];
*/

function Grid(width, height) {
      this.space = new Array(width*height);
      this.width = width;
      this.height = height;
}

Grid.prototype.isInside = function(position) {
      return position.x >= 0 && position.x < this.width &&
             position.y >= 0 && position.y < this.height;
};
Grid.prototype.get = function(position) {
      return this.space[position.x + (this.width*position.y)];
};
Grid.prototype.set = function(position, value) {
      this.space[position.x + (this.width*position.y)] = value;
};
Grid.prototype.forEach = function(f, context) {
      for (var y=0; y<this.height; y++) {
            for(var x=0; x<this.width; x++) {
                  var value = this.space[x + y*this.width];
                  if(value != null)
                        f.call(context, value, new Position(x,y));
            }
      }
};

function elementFromChar(legend, ch) {
      if (ch == " ")
           return null;
      var element = new legend[ch]();
      element.originChar = ch;
      return element;
}

function charFromElement(element) {
      if(element == null)
            return " ";
      else
            return element.originChar;
}

function World(map, legend) {
      var grid = new Grid(map[0].length, map.length);
      this.grid = grid;
      this.legend = legend;

      map.forEach(function(line,y) {
            for (var x=0; x < line.length; x++) {
                  grid.set(new Position(x,y),
                            elementFromChar(legend,line[x])
                           );
            }
      });
}

World.prototype.toString = function() {
      var output = "";
      for(var y=0; y<this.grid.height; y++) {
            for(var x=0; x<this.grid.width; x++) {
                  var element = this.grid.get(new Position(x,y));
                  output += charFromElement(element);
            }
            output += "\n";
      }
      return output;
};

World.prototype.letAct = function(critter, position) {
      var action = critter.act(new View(this, position));
      if(action && action.type == "move") {
            var dest = this.checkDestination(action,position);
            if(dest && this.grid.get(dest) == null) {
                  this.grid.set(position, null);
                  this.grid.set(dest,critter);
            }
      }
};

World.prototype.checkDestination = function(action, position) {
      if (directions.hasOwnProperty(action.direction)) {
            var dest = position.plus(directions[action.direction]);
            if(this.grid.isInside(dest))
                  return dest;
      }
};

World.prototype.turn = function() {
      var acted = [];
      this.grid.forEach(function(critter, position) {
            if(critter.act && acted.indexOf(critter) == -1) {
                  acted.push(critter);
                  this.letAct(critter,position);
            }
      }, this);
};


function View(world, position) {
      this.world = world;
      this.position = position;
}

View.prototype.look = function(dir) {
      var target = this.position.plus(directions[dir]);
      if(this.world.grid.isInside(target))
            return charFromElement(this.world.grid.get(target));
      else
            return "#";
};

View.prototype.findAll = function(ch) {
      var found = [];
      for(var dir in directions)
            if(this.look(dir) == ch)
                  found.push(dir);
      return found;
};

View.prototype.find = function(ch) {
      var found = this.findAll(ch);
      if(found.length == 0) return null;
      return randomElement(found);
};

function Wall() {}

var world = new World(plan, {
                              "#": Wall,
                              "o": BouncingCritter
                            });


for(var i = 0; i < 5; i++) {
      world.turn();
      console.log(world.toString());
}