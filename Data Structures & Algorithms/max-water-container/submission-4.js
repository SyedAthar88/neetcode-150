class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
        // to solve this problem we have to take maxw,minheight for the area calculation
        let max_Water = 0;
        let lp = 0;
        let rp = height.length - 1;
        while (lp < rp) {
           let w = rp - lp;
          let   h = Math.min(height[lp], height[rp]);
           let area = w * h;
            max_Water = Math.max(area, max_Water);
            height[lp] < height[rp] ? lp++ : rp--;

        }
        return max_Water;
    }
}