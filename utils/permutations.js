/**
 * utils/permutations.js
 * Module for working with lexicographic permutations.
 */

var Permutations = function ( arr )
{
    this.arr = arr.slice ();
    this.arr.sort ();
    this._isFinished = false;
    this._size = this.arr.length;
};
Permutations.prototype.current = function ()
{
    return this.arr.slice ();
};
Permutations.prototype.next = function ()
{
    if ( !this._isFinished )
    {

        /* find the farthest right character that is smaller than its
           successor */
        var smallerItemIndex = this._size - 2;
        for ( ; smallerItemIndex > -1; --smallerItemIndex )
            if ( this.arr [smallerItemIndex] < this.arr [smallerItemIndex+1] ) break;
        // if smaller item index is -1, it is already the last permutations
        if ( smallerItemIndex == -1 )
        {
            this._isFinished = true;
            return null;
        }
        /* find smallest character to the right of the smallerItem that
           is larger than it. */
        var floor = this.arr [smallerItemIndex];
        var nextLargestIndex = smallerItemIndex + 1;
        for ( var i = smallerItemIndex; i < this._size; ++i )
        {
            if ( this.arr [i] > floor &&
                this.arr [i] < this.arr [nextLargestIndex] )
            {
                nextLargestIndex = i;
            }
        }
        // swap the two positions
        this.arr [smallerItemIndex] = this.arr [nextLargestIndex];

        this.arr [nextLargestIndex] = floor;

        var part1 = this.arr.slice ( 0, smallerItemIndex + 1 );
        var part2 = this.arr.slice ( smallerItemIndex + 1 );

        // sort the array to the right of smallerItemIndex
        part2.sort ();
        this.arr = part1.concat ( part2 );
        
        return this.arr.slice ();
    }
    else return null;
};
module.exports = Permutations;