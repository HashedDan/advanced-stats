/* 
    * Create a new instance of nba.
*/
function nba() {
    let that = this;

    if (!(that instanceof nba)) {
        return new nba();
    }
}

nba.prototype = {

    /*
        * Calculates a player's true shooting percentage.
        * @param {number} points
        * @param {number} fta (free throw attempts)
        * @param {number} fga (field goal attempts)
        * @returns {number}
    */
   tsp(points, fta, fga) {
       return (points / (2 * (fga + (.44 * fta))));
   },

   /*
        * Calculates a player's free throw rate.
        * @param {number} fta (free throw attempts)
        * @param {number} fga (field goal attempts)
        * @returns {number}
   */
   ftr(fta, fga) {
       return (fta / fga);
   },

   /* 
        * Calculates a player's usage percentage.
        * @param {number} fga (field goal attempts)
        * @param {number} fta (free throw attempts)
        * @param {number} tov (turnovers)
        * @param {number} tmp (team minutes playes)
        * @param {number} mp (minutes played)
        * @param {number} tfga (team field goal attempts)
        * @param {number} tfta (team free throw attempts)
        * @param {number} ttov (team turnovers)
        * @returns {number}
   */
   usg(fga, fta, tov, tmp, mp, tfga, tfta, ttov) {
        return (100*((fga+.44*fta+tov)*(tmp/5)))/(mp*(tfga+0.44*tfta+ttov));
   }


}

/* 
    * Create a new instance of nfl.
*/
function nfl() {
    let that = this;

    if (!(that instanceof nba)) {
        return new nfl();
    }
}

module.exports = {nba, nfl};