import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. Explain Raster Scan and Random Scan Display. 👉 Draw diagram + Differences (VERY IMPORTANT)",
      answer: "📌 100% exam question type",
      codeExample: `
⭐ Raster Scan Display

✅ Simple Meaning

Raster scan display draws picture line by line from top to bottom, like TV screen scanning.

📌 Working

Screen divided into small dots → Pixels
Pixel data stored in Frame Buffer (memory)
Electron beam scans row by row


📊 Raster Scan Diagram

-------------------------
| → → → → → → → → → → → |
| → → → → → → → → → → → |
| → → → → → → → → → → → |
| → → → → → → → → → → → |
 -------------------------

 Scanning line by line (Top → Bottom)

✅ Features

✔ Used in modern monitors
✔ Supports filled shapes, images, shading
✔ Cheaper technology



⭐ Random Scan Display (Vector Display)

✅ Simple Meaning

Random scan display draws picture only where lines are required (not full screen).

📌 Working

Stores line drawing instructions
Beam directly moves to draw lines
Draws one line at a time


📊 Random Scan Diagram

Screen

   \\        /
    \\      /
     \\____/
     /    \\
    /      \\

Beam directly draws required lines only


✅ Features

✔ Very smooth lines
✔ Used in old CAD systems
✔ Good for wireframe drawings



⭐ ⭐ Difference Between Raster Scan & Random Scan (VERY IMPORTANT)

| Raster Scan                 | Random Scan                  |
| --------------------------- | ---------------------------- |
| Line by line scanning       | Draws only required lines    |
| Pixel based picture         | Line based picture           |
| Uses Frame Buffer memory    | Stores line drawing commands |
| Slower for line drawing     | Faster for line drawing      |
| Low cost                    | High cost                    |
| Good for images             | Best for line drawings       |
| Used in TV, modern monitors | Used in old CAD systems      |


⭐ Easy Memory Trick 🧠

👉 Raster = Rows scanning
👉 Random = Direct line drawing


⭐ One Line Exam Definition

✅ Raster Scan:
Display where image is drawn using pixels scanned line by line.

✅ Random Scan:
Display where electron beam draws only required lines of picture.
      
      `
    },
    {
      id: 2,
      question: "2. Explain DDA Line Drawing Algorithm with example.",
      answer: "📌 Most repeated question",
      codeExample: `
⭐ DDA Line Drawing Algorithm
✅ Simple Meaning

DDA (Digital Differential Analyzer) is a line drawing algorithm used to draw a straight line on screen by 
calculating intermediate points between two endpoints.

It works by calculating small steps in x or y direction and finding the next pixel position.



⭐ Formula Used

For line between two points:
(x₁, y₁) → (x₂, y₂)


Step 1: Calculate Differences
Δx = x2 – x1
Δy = y2 – y1


Step 2: Find max number 
Steps = max(|Δx|, |Δy|)


Step 3: Find increment

Xinc = Δx / Steps
Yinc = Δy / Steps


step 3: increment with X and Y

x = x + Xinc
y = y + Yinc

👉 Each calculated value is rounded to nearest integer pixel.
These incremental calculations are the base of DDA line generation. 


---------------------------------------------------------


⭐ Steps of DDA Algorithm

Step 1

Input starting point (x₁, y₁) and ending point (x₂, y₂)


Step 2

Calculate
Δx and Δy


Step 3
Find number of steps

Steps = max(|Δx|, |Δy|)


Step 4
Find increment

Xinc = Δx / Steps
Yinc = Δy / Steps


Step 5

Plot first point


Step 6

Repeat steps times
Add increments and plot next point


---------------------------------------------------------


⭐ Example (Very Important)

Given

(x₁, y₁) = (5, 6)
(x₂, y₂) = (13, 10)

Step 1
Δx = 13 – 5 = 8
Δy = 10 – 6 = 4


Step 2
Steps = max(8,4) = 8


Step 3
Xinc = 8 / 8 = 1
Yinc = 4 / 8 = 0.5


Step 4 Plot Points

| Step  | X  | Y        |
| ----- | -- | -------- |
| Start | 5  | 6        |
| 1     | 6  | 6.5 → 7  |
| 2     | 7  | 7        |
| 3     | 8  | 7.5 → 8  |
| 4     | 9  | 8        |
| 5     | 10 | 8.5 → 9  |
| 6     | 11 | 9        |
| 7     | 12 | 9.5 → 10 |
| 8     | 13 | 10       |



⭐ Advantages of DDA

✅ Simple and easy to implement
✅ Easy mathematical calculation
✅ Faster than basic line equation method
✅ Less complex logic


⭐ Disadvantages of DDA

❌ Uses floating point calculation
❌ Uses round function → increases time
❌ Less accurate than Bresenham
❌ Line may not be perfectly smooth


⭐ One Line Exam Definition

DDA is an incremental scan conversion algorithm that calculates intermediate points using slope to draw 
a straight line.

      `
    },
    {
      id: 3,
      question: "3. Explain Bresenham’s Line Drawing Algorithm with example. Decision parameter Comparison with DDA ",
      answer: "📌 High scoring + numerical example",
      codeExample: `
⭐ Bresenham’s Line Drawing Algorithm
✅ Simple Meaning

Bresenham’s Line Drawing Algorithm is an efficient algorithm used to draw a straight line using only 
integer calculations.

It avoids floating point operations and rounding, so it is faster and more accurate than DDA.


⭐ Basic Idea

Instead of calculating slope (m), it uses a Decision Parameter (P) to decide which pixel to choose next.

At each step, we choose between:

  East pixel (E)
  North-East pixel (NE)

depending on the value of the decision parameter.



⭐ Decision Parameter Formula (For |m| < 1)

Given line from

      (x0​,y0​)→(xn​,yn​)


Step 1: Calculate

      Δx=xn​−x0​
      Δy=yn​−y0
      
      
Step 2: Initial Decision Parameter

      P0​=2Δy−Δx


Step 3: Update Rules

if Pk < 0
      Pk+1​=Pk​+2Δy

👉 Choose E pixel
👉 x increases by 1
👉 y remains same


if Pk >= 0
      Pk+1​=Pk​+2Δy−2Δx

👉 Choose NE pixel
👉 x increases by 1
👉 y increases by 1


⭐ Steps of Algorithm

1️⃣ Input starting and ending points
2️⃣ Calculate Δx and Δy
3️⃣ Calculate initial decision parameter
4️⃣ Plot first point
5️⃣ For each x:
If P < 0 → choose E
Else → choose NE
  6️⃣ Repeat until end point reached




⭐ Numerical Example (Very Important)

Given:

      (x0​,y0​)=(5,6)
      (xn​,yn​)=(13,10)

  
Step 1: Calculate Differences
      Δx=13−5=8
      Δy=10−6=4


Step 2: Initial Decision Parameter

      P0​=2(4)−8
      P0​=8−8=0


Step 3: Constants

      2Δy=8
      2Δy−2Δx=8−16=−8


Step 4: Iteration Table

| Step  | Pk            | Decision   | Next Point |
| ----- | ------------- | ---------- | ---------- |
| Start | 0             | P ≥ 0 → NE | (6,7)      |
| 1     | 0 + (-8) = -8 | P < 0 → E  | (7,7)      |
| 2     | -8 + 8 = 0    | NE         | (8,8)      |
| 3     | 0 + (-8) = -8 | E          | (9,8)      |
| 4     | -8 + 8 = 0    | NE         | (10,9)     |
| 5     | 0 + (-8) = -8 | E          | (11,9)     |
| 6     | -8 + 8 = 0    | NE         | (12,10)    |
| 7     | 0 + (-8) = -8 | E          | (13,10)    |



⭐ Advantages of Bresenham

✔ Uses only integer calculations
✔ No floating point
✔ Faster than DDA
✔ More accurate
✔ Less memory usage

⭐ Disadvantages

❌ Slightly complex logic
❌ Basic version works for |m| < 1 (needs modification for other slopes)



⭐ Comparison: Bresenham vs DDA (⭐ VERY IMPORTANT)

| DDA Algorithm                  | Bresenham Algorithm     |
| ------------------------------ | ----------------------- |
| Uses floating point arithmetic | Uses integer arithmetic |
| Uses rounding function         | No rounding required    |
| Less accurate                  | More accurate           |
| Slightly slower                | Faster                  |
| Easy to understand             | Slightly complex        |
| Uses slope (m)                 | Uses decision parameter |



⭐ Short Exam Definition

Bresenham’s algorithm is an incremental scan conversion algorithm that uses a decision parameter to 
determine the next pixel using integer calculations.

      `
    },
    {
      id: 4,
      question: "4. Explain Midpoint Circle Algorithm with example.",
      answer: "📌 Very important circle algorithm",
      codeExample: `
⭐ Midpoint Circle Algorithm
✅ Simple Meaning

Midpoint Circle Algorithm is used to draw a circle using only integer calculations.

It is based on the circle equation:
      x2+y2=r2

Instead of calculating every point, it checks the midpoint between two possible pixels and decides which 
pixel is closer to the circle.



⭐ Basic Idea

For each step, we choose between:

  East (E) → (x+1, y)
  South-East (SE) → (x+1, y-1)

Decision depends on the Decision Parameter (P).

Because circle is symmetric, we calculate points for one octant only and use symmetry to get remaining 7 
octants.



⭐ Initial Conditions

For circle centered at (0,0):

Starting point:

      (x0​,y0​)=(0,r)

Initial decision parameter:

      P0​=1−r


⭐ Decision Parameter Update

If Pk​<0

👉 Midpoint is inside circle
Choose East pixel

      Pk+1​=Pk​+2xk​+3


If Pk​≥0

👉 Midpoint is outside circle
Choose South-East pixel

      Pk+1​=Pk​+2xk​−2yk​+5


Repeat until x≥y



⭐ Steps of Algorithm

1️⃣ Input radius r and center (xc, yc)
2️⃣ Set x = 0, y = r
3️⃣ Compute initial P = 1 − r
4️⃣ Plot 8 symmetric points
5️⃣ While x < y:
  x = x + 1
  If P < 0 → update using first formula
  Else → y = y − 1 and update using second formula
  6️⃣ Repeat



⭐ Numerical Example (Very Important)

Given:

Radius r = 10
Center = (0,0)


Step 1: Initial Values

  x0​=0
  y0​=10
  P0​=1−10=−9


Step 2: Iterations

| Step | x | y  | P  | Decision          |
| ---- | - | -- | -- | ----------------- |
| 0    | 0 | 10 | -9 | P<0 → E           |
| 1    | 1 | 10 | -6 | E                 |
| 2    | 2 | 10 | -1 | E                 |
| 3    | 3 | 10 | 6  | SE                |
| 4    | 4 | 9  | 1  | SE                |
| 5    | 5 | 8  | 2  | SE                |
| 6    | 6 | 7  | 9  | Stop (x ≥ y soon) |

Now reflect these points in all 8 octants.


⭐ 8-Way Symmetry of Circle

If calculated point is (x, y)

Other points are:

(x,y)
(y,x)
(−x,y)
(−y,x)
(−x,−y)
(−y,−x)
(x,−y)
(y,−x)




⭐ Advantages

✔ Uses only integer arithmetic
✔ Faster than direct equation method
✔ Efficient for raster display
✔ Easy to implement

⭐ Disadvantages

❌ Slight inaccuracy due to pixel approximation
❌ Circle may not be perfectly smooth


⭐ Short Exam Definition

Midpoint Circle Algorithm is an incremental algorithm that uses a decision parameter to determine the 
nearest pixel to form a circle using 8-way symmetry.


`
    },
    {
      id: 5,
      question: "5. Explain Midpoint Ellipse Algorithm (steps + decision parameter).",
      answer: "📌 10–12 mark long answer possibility",
      codeExample: `
-----------------------------------------
MIDPOINT ELLIPSE ALGORITHM
-----------------------------------------

-----------------------------------------
SIMPLE MEANING
-----------------------------------------

The Midpoint Ellipse Algorithm is used to draw
an ellipse using an incremental method.

It is based on the ellipse equation:

   x²        y²
  ----  +  ----  = 1
  rx²       ry²

It uses a decision parameter to choose the
next pixel position.

Ellipse uses 4-way symmetry.


-----------------------------------------
BASIC IDEA
-----------------------------------------

Ellipse is divided into two regions:

Region 1:
Slope > -1
Move in x-direction

Region 2:
Slope < -1
Move in y-direction

After computing first quadrant,
reflect points to other quadrants.


-----------------------------------------
INITIAL SETUP
-----------------------------------------

Given:
rx = x-radius
ry = y-radius
Center = (xc , yc)

Start point:
(x0 , y0) = (0 , ry)


-----------------------------------------
REGION 1 DECISION PARAMETER
-----------------------------------------

Initial value:

P1(0) = ry² − rx²·ry + (1/4)rx²


-----------------------------------------
REGION 1 CONDITION
-----------------------------------------

While:
2ry²x < 2rx²y


Case 1: P1 < 0
→ Midpoint inside
→ Next point: (x+1 , y)

P1(k+1) = P1k + 2ry²x + ry²


Case 2: P1 ≥ 0
→ Midpoint outside
→ Next point: (x+1 , y−1)

P1(k+1) = P1k + 2ry²x − 2rx²y + ry²


-----------------------------------------
REGION 2 DECISION PARAMETER
-----------------------------------------

Initial value:

P2(0) = ry²(x + 1/2)² + rx²(y − 1)² − rx²ry²


-----------------------------------------
REGION 2 CONDITION
-----------------------------------------

While y ≥ 0


Case 1: P2 > 0
→ Next point: (x , y−1)

P2(k+1) = P2k − 2rx²y + rx²


Case 2: P2 ≤ 0
→ Next point: (x+1 , y−1)

P2(k+1) = P2k + 2ry²x − 2rx²y + rx²


-----------------------------------------
COMPLETE ALGORITHM STEPS
-----------------------------------------

1. Input rx, ry and center (xc , yc)
2. Initialize x = 0, y = ry
3. Compute P1
4. Process Region 1
5. Compute P2
6. Process Region 2
7. Apply 4-way symmetry


-----------------------------------------
4-WAY SYMMETRY
-----------------------------------------

For point (x , y):

(x , y)
(-x , y)
(x , -y)
(-x , -y)

Add center:

x = x + xc
y = y + yc


-----------------------------------------
ADVANTAGES
-----------------------------------------

✔ Efficient incremental method
✔ No floating point calculation
✔ Fast for raster display


-----------------------------------------
DISADVANTAGES
-----------------------------------------

❌ Slight approximation error
❌ More complex than circle algorithm


-----------------------------------------
SHORT EXAM DEFINITION
-----------------------------------------

Midpoint Ellipse Algorithm is an incremental
scan conversion algorithm that uses decision
parameters to generate ellipse points in two
regions using 4-way symmetry.




-----------------------------------------
NUMERICAL EXAMPLE
-----------------------------------------

Given:
rx = 8
ry = 6
Center = (0,0)

rx² = 64
ry² = 36


-----------------------------------------
INITIAL VALUES
-----------------------------------------

x = 0
y = 6

P1 = ry² − rx²·ry + (1/4)rx²
P1 = 36 − (64×6) + 16
P1 = -332


-----------------------------------------
REGION 1 TABLE
-----------------------------------------

Condition:
2ry²x < 2rx²y

| Iter | x | y | P1   | Decision          |
|------|---|---|------|-------------------|
| 0    | 0 | 6 | -332 | P1<0 → (x+1,y)    |
| 1    | 1 | 6 | -224 | P1<0 → (x+1,y)    |
| 2    | 2 | 6 | -44  | P1<0 → (x+1,y)    |
| 3    | 3 | 6 | 208  | P1≥0 → (x+1,y-1)  |
| 4    | 4 | 5 | -108 | P1<0 → (x+1,y)    |
| 5    | 5 | 5 | 288  | P1≥0 → (x+1,y-1)  |
| 6    | 6 | 4 | 148  | P1≥0 → (x+1,y-1)  |
| 7    | 7 | 3 | Exit Region 1            |


-----------------------------------------
REGION 2 INITIAL VALUE
-----------------------------------------

x = 7
y = 3

P2 = 36(7.5)² + 64(2)² − 2304
P2 = 2025 + 256 − 2304
P2 = -23


-----------------------------------------
REGION 2 TABLE
-----------------------------------------

| Iter | x | y | P2   | Decision          |
|------|---|---|------|-------------------|
| 0    | 7 | 3 | -23  | P2≤0 → (x+1,y-1)  |
| 1    | 8 | 2 | 233  | P2>0 → (x,y-1)    |
| 2    | 8 | 1 | 169  | P2>0 → (x,y-1)    |
| 3    | 8 | 0 | Stop | End               |


-----------------------------------------
FINAL POINTS (FIRST QUADRANT)
-----------------------------------------

Region 1:
(0,6)
(1,6)
(2,6)
(3,6)
(4,5)
(5,5)
(6,4)
(7,3)

Region 2:
(8,2)
(8,1)
(8,0)


-----------------------------------------
EXAM TIPS
-----------------------------------------

✔ Draw table neatly
✔ Show iterations
✔ Mention both regions
✔ Write symmetry clearly
✔ Final points must be shown


`
    },
    {
      id: 6,
      question: "6. short questions",
      answer: "",
      codeExample: `
Elips for your exam :

-----------------------------------------
MIDPOINT ELLIPSE ALGORITHM (WITH EXAMPLE)
-----------------------------------------

Definition:
Midpoint Ellipse Algorithm is used to draw an ellipse
using decision parameters and 4-way symmetry.


-----------------------------------------
BASIC IDEA
-----------------------------------------

Ellipse is divided into 2 regions:

Region 1 → slope > -1 (move in x)
Region 2 → slope < -1 (move in y)


-----------------------------------------
INITIAL VALUES
-----------------------------------------

x = 0
y = ry

P1 = ry² − rx²·ry + (1/4)rx²


-----------------------------------------
REGION 1
-----------------------------------------

Condition:
2ry²x < 2rx²y

If P1 < 0 → (x+1 , y)
If P1 ≥ 0 → (x+1 , y−1)


-----------------------------------------
REGION 2
-----------------------------------------

P2 = ry²(x+1/2)² + rx²(y−1)² − rx²ry²

If P2 > 0 → (x , y−1)
If P2 ≤ 0 → (x+1 , y−1)


-----------------------------------------
SYMMETRY
-----------------------------------------

(x,y), (-x,y), (x,-y), (-x,-y)


-----------------------------------------
EXAMPLE
-----------------------------------------

Given:
rx = 4
ry = 3
Center = (0,0)

rx² = 16
ry² = 9

Initial point:
x = 0
y = 3

P1 = ry² − rx²·ry + (1/4)rx²
P1 = 9 − (16×3) + 4
P1 = -35


Now apply Region 1 (only 2–3 steps enough):

Step 1:
P1 < 0 → (1 , 3)

Step 2:
P1 < 0 → (2 , 3)

Step 3:
P1 ≥ 0 → (3 , 2)


Region 2 (only 1–2 steps):

Next:
(4 , 1)
(4 , 0)


-----------------------------------------
FINAL POINTS (FIRST QUADRANT)
-----------------------------------------

(0,3), (1,3), (2,3), (3,2), (4,1), (4,0)


-----------------------------------------
DIAGRAM
-----------------------------------------

      *
   *     *
 *         *
   *     *
      *

(draw simple ellipse)


🧠 2 MARK / MCQ – JUST READ

Pixel = Smallest screen element
Frame buffer = Stores intensity values
Resolution = Number of pixels
Refresh rate = ≥ 60 times per second
Equation of circle → x² + y² = r²
DDA uses → floating point
Bresenham uses → integer arithmetic
      
      `
    },
    {
      id: 11,
      question: "11. Explain Scan Line Polygon Fill Algorithm with steps and diagram.  Must write: Steps of algorithm, Intersection points, Filling pairs of pixels",
      answer: "📌 Very common exam question.",
      codeExample: `
⭐ What is a Polygon?
✅ Simple Meaning

A polygon is a closed shape made using straight lines.
The lines connect to form a closed figure.


Examples

Triangle (3 sides)

   /\\
  /  \\
 /____\\

 Rectangle (4 sides)
 _______
|       |
|       |
|_______|

Pentagon (5 sides)

   /\\
  /  \\
 /    \\
|      |
 \\____/


👉 In computer graphics, polygons are used to draw shapes like:

triangle
rectangle
square
pentagon
hexagon
      

-------------------------------------


⭐ What is Polygon Filling?

Sometimes we want to color the inside of the shape.

Example:

Before filling

 _______
|       |
|       |
|_______|


After filling
 _______
|#######|
|#######|
|#######|

The algorithm fills the inside pixels.


-------------------------------------


⭐ Scan Line Polygon Fill (Very Simple Idea)

Imagine a horizontal line moving from top to bottom.

Polygon

   /\\ 
  /  \\
 /____\\

Scan line →

--------

The scan line cuts the polygon edges.
Where it cuts is called intersection points.


⭐ Example

Scan line

--------x1------x2--------

x1 = first intersection
x2 = second intersection

Pixels between them are filled.

--------######--------
      

-------------------------------------


⭐ If There Are 4 Intersections

--------x1---x2---x3---x4--------

Fill in pairs:

Fill x1 → x2
Skip x2 → x3
Fill x3 → x4

Result:

----#####----#####----


-------------------------------------


⭐ Simple Steps

1️⃣ Draw horizontal scan line
2️⃣ Find where it touches polygon edges
3️⃣ These points are intersection points
4️⃣ Fill pixels between pairs



⭐ Very Easy Example
Polygon

     /\\
    /  \\
---/----\\---
   \\    /
    \\__/

Scan line touches edges at:

x1        x2

Fill:

###########


⭐ One Line Definition (Exam)

A polygon is a closed shape made of straight lines, and the scan line algorithm fills the inside of the 
polygon using horizontal scanning lines.


final output like this:

        /\\
       /  \\
      /    \\
   x1/######\\x2
    /        \\
   /          \\
  /____________\\

`
    },
    {
      id: 12,
      question: "12. Explain Flood Fill Algorithm with algorithm and advantages/disadvantages.  Include: 4-connected method, 8-connected method, Algorithm steps",
      answer: "📌 Frequently asked question.",
      codeExample: `
Flood Fill Algorithm

The Flood Fill Algorithm works by starting from a seed pixel and spreading to neighboring pixels that have 
the same target color until the boundary is reached.

Basic Idea

1. Start from a seed point (x, y).
2. Check if the pixel has the target color.
3. Change it to the replacement color.
4. Repeat the process for neighboring pixels.
5. Stop when pixels are different from the target color or already filled.
      

Types of Connectivity

Flood fill can be implemented using two connectivity methods.


1. 4-Connected Method

In the 4-connected method, a pixel is connected to four neighbors:

Left (x−1, y)
Right (x+1, y)
Up (x, y−1)
Down (x, y+1)


Diagram

       (x,y-1)
          |
(x-1,y) (x,y) (x+1,y)
          |
       (x,y+1)


Characteristics

  Checks only horizontal and vertical neighbors.
  Diagonal pixels are not considered connected.


Algorithm (4-Connected Flood Fill):

FloodFill4(x, y, targetColor, replacementColor)

1. If pixel(x, y) ≠ targetColor
       return

2. Set pixel(x, y) = replacementColor

3. FloodFill4(x+1, y, targetColor, replacementColor)
4. FloodFill4(x-1, y, targetColor, replacementColor)
5. FloodFill4(x, y+1, targetColor, replacementColor)
6. FloodFill4(x, y-1, targetColor, replacementColor)
      

-----------------------------------

2. 8-Connected Method

In the 8-connected method, a pixel is connected to eight neighbors, including diagonals.

Neighbors:

Left (x−1, y)
Right (x+1, y)
Up (x, y−1)
Down (x, y+1)
Top-left (x−1, y−1)
Top-right (x+1, y−1)
Bottom-left (x−1, y+1)
Bottom-right (x+1, y+1)


Diagram

(x-1,y-1) (x,y-1) (x+1,y-1)
(x-1,y)   (x,y)   (x+1,y)
(x-1,y+1) (x,y+1) (x+1,y+1)


Characteristics

  Includes diagonal connectivity.
  Covers more pixels faster than the 4-connected method.


Algorithm (8-Connected Flood Fill):

FloodFill8(x, y, targetColor, replacementColor)

1. If pixel(x, y) ≠ targetColor
       return

2. Set pixel(x, y) = replacementColor

3. FloodFill8(x+1, y, targetColor, replacementColor)
4. FloodFill8(x-1, y, targetColor, replacementColor)
5. FloodFill8(x, y+1, targetColor, replacementColor)
6. FloodFill8(x, y-1, targetColor, replacementColor)

7. FloodFill8(x+1, y+1, targetColor, replacementColor)
8. FloodFill8(x-1, y-1, targetColor, replacementColor)
9. FloodFill8(x+1, y-1, targetColor, replacementColor)
10. FloodFill8(x-1, y+1, targetColor, replacementColor)


Advantages of Flood Fill Algorithm

Simple to understand and implement.
Efficient for filling large connected areas.
Used in graphics editors and image processing applications.
Works well for region filling in computer graphics.


Disadvantages of Flood Fill Algorithm

High memory usage when recursion is deep.
Stack overflow risk for large images with recursive implementation.
Slow for very large regions because many pixels are checked.
Sometimes leaks outside boundaries if the region is not perfectly closed.


✅ Summary

| Method      | Connectivity                     | Neighbor Count |
| ----------- | -------------------------------- | -------------- |
| 4-connected | Horizontal + Vertical            | 4              |
| 8-connected | Horizontal + Vertical + Diagonal | 8              |

`
    },
    {
      id: 13,
      question: "13. Explain Boundary Fill Algorithm with 4-connected and 8-connected method.  Write: Definition, Steps, Example",
      answer: "📌 Important for theory + algorithm",
      codeExample: `
Boundary Fill Algorithm
Definition

The Boundary Fill Algorithm is a computer graphics algorithm used to fill a region with a specified color 
starting from a seed point until a boundary color is reached.

The algorithm stops filling when it encounters the boundary color of the region.

It is commonly used in paint and drawing applications to color enclosed shapes.


Working Principle

1. A seed point inside the region is selected.
2. The algorithm checks the color of the pixel.
3. If the pixel is not the boundary color and not already filled, it fills the pixel.
4. The algorithm then repeats the process for neighboring pixels.
5. The process continues until the boundary color is encountered.


--------------------------------------


4-Connected Boundary Fill Method

In the 4-connected method, the algorithm checks four neighboring pixels:

Left (x−1, y)
Right (x+1, y)
Up (x, y−1)
Down (x, y+1)


Steps (Algorithm):

BoundaryFill4(x, y, fillColor, boundaryColor)

1. If pixel(x, y) is not boundaryColor 
   and pixel(x, y) is not fillColor then

2. Set pixel(x, y) = fillColor

3. Call BoundaryFill4(x+1, y, fillColor, boundaryColor)
4. Call BoundaryFill4(x-1, y, fillColor, boundaryColor)
5. Call BoundaryFill4(x, y+1, fillColor, boundaryColor)
6. Call BoundaryFill4(x, y-1, fillColor, boundaryColor)


Neighbor Structure

       (x,y-1)
          |
(x-1,y) (x,y) (x+1,y)
          |
       (x,y+1)


   
8-Connected Boundary Fill Method

In the 8-connected method, the algorithm checks eight neighboring pixels including diagonals.

Neighbors:

Left (x−1, y)
Right (x+1, y)
Up (x, y−1)
Down (x, y+1)
Top-left (x−1, y−1)
Top-right (x+1, y−1)
Bottom-left (x−1, y+1)
Bottom-right (x+1, y+1)


Steps (Algorithm):

BoundaryFill8(x, y, fillColor, boundaryColor)

1. If pixel(x, y) is not boundaryColor 
   and pixel(x, y) is not fillColor then

2. Set pixel(x, y) = fillColor

3. BoundaryFill8(x+1, y, fillColor, boundaryColor)
4. BoundaryFill8(x-1, y, fillColor, boundaryColor)
5. BoundaryFill8(x, y+1, fillColor, boundaryColor)
6. BoundaryFill8(x, y-1, fillColor, boundaryColor)

7. BoundaryFill8(x+1, y+1, fillColor, boundaryColor)
8. BoundaryFill8(x-1, y-1, fillColor, boundaryColor)
9. BoundaryFill8(x+1, y-1, fillColor, boundaryColor)
10. BoundaryFill8(x-1, y+1, fillColor, boundaryColor)


Neighbor Structure

(x-1,y-1) (x,y-1) (x+1,y-1)
(x-1,y)   (x,y)   (x+1,y)
(x-1,y+1) (x,y+1) (x+1,y+1)


Example

Suppose we have a circle drawn with a black boundary and the inside is white.

  Boundary color = Black
  Fill color = Blue
  Seed point = Any pixel inside the circle

Steps:

1. Select a pixel inside the circle.
2. Check whether it is boundary color.
3. Fill it with blue.
4. Repeat for neighboring pixels.
5. Stop when black boundary pixels are reached.

Result:
The entire region inside the circle becomes blue while the boundary remains black.


✅ Summary

| Method      | Neighbors Checked | Description                                      |
| ----------- | ----------------- | ------------------------------------------------ |
| 4-Connected | 4                 | Checks only horizontal and vertical pixels       |
| 8-Connected | 8                 | Checks horizontal, vertical, and diagonal pixels |

      `
    },
    {
      id: 14,
      question: "14. Difference Between Flood Fill and Boundary Fill",
      answer: "",
      codeExample: `
1️⃣ Flood Fill Algorithm

Flood Fill looks at the color inside the shape.

Example:

Before fill

########
#      #
#      #
#      #
########

Inside color = white


If you click inside with red, it fills all white pixels.

########
#RRRRRR#
#RRRRRR#
#RRRRRR#
########

👉 It fills all connected pixels of the same color.


2️⃣ Boundary Fill Algorithm

Boundary Fill looks at the border color.

Example:

Boundary color = #

########
#      #
#      #
#      #
########


When filling starts:

It keeps filling until it touches # (boundary).
It stops at the border.

      
Easy Trick to Remember

🟢 Flood Fill → checks INSIDE color
🔵 Boundary Fill → checks BORDER color



1️⃣ Flood Fill Algorithm

Idea: Fill all connected pixels having the same interior color.

Algorithm

1. Start with a seed point (x, y) inside the region.
2. Check the color of the pixel.
3. If the pixel color = old color, change it to new color.
4. Repeat the process for neighbor pixels:

    (x+1, y)
    (x-1, y)
    (x, y+1)
    (x, y-1)

5. Continue until all connected pixels of the old color are filled.


Short Definition (Exam)

Flood Fill: A filling algorithm that replaces all connected pixels of the same interior color starting from a 
seed point.



2️⃣ Boundary Fill Algorithm

Idea: Fill the region until the boundary color is reached.

Algorithm

1. Start with a seed point (x, y) inside the region.
2. Check the pixel color.
3. If pixel color ≠ boundary color and ≠ fill color, then:
    Change it to fill color.
4. Repeat for neighboring pixels:

(x+1, y)
(x-1, y)
(x, y+1)
(x, y-1)

5. Stop when boundary color is reached.



Short Definition (Exam)

Boundary Fill: A filling algorithm that fills a region until a specified boundary color is encountered.


3️⃣ Difference Between Flood Fill and Boundary Fill

| Flood Fill Algorithm                | Boundary Fill Algorithm              |
| ------------------------------------| -------------------------------------|
| Uses interior color                 | Uses boundary color                  |
| Replaces pixels of the same color   | Stops when boundary color is reached |
| Works when region has uniform color | Works when region has clear border   |
| Does not need boundary color        | Requires boundary color              |

`
    },
    {
      id: 15,
      question: "15. Explain Anti-Aliasing and its methods.",
      answer: "📌 Theory question often asked.",
      codeExample: `
What is Anti-Aliasing?

When we draw a line or curve on a computer screen, the edges look zig-zag or stair-shaped because the 
screen uses square pixels.

Example (jagged edge):

#####
    #####
         #####

This stair shape is called aliasing.
Anti-Aliasing is a method used to make edges look smooth.


Example (smoother edge):

######
  ######
    ######

The computer changes pixel brightness (color intensity) near the edges so the line looks smoother.



Methods of Anti-Aliasing

1. High Resolution Display

Idea

Use more pixels on the screen.
When pixels are very small, edges look smoother.

Example:

Low resolution

#  #  #
 #  # 

High resolution

########
 #######
  ######

Simple Meaning
More pixels → smoother image.



2. Post Filtering (Supersampling)

Idea

Each pixel is divided into smaller parts (sub-pixels).

Example:

Pixel

|----|
|____|

Divide into 4 parts:

|--|--|
|__|__|

The computer checks color in each small part and then averages them.

Result → smoother edges.



3. Pre Filtering
Idea

The computer checks how much of a pixel is covered by the object.

Example:

Pixel coverage

[████ ] 80% covered

The pixel color becomes 80% bright.
If only 20% is covered → lighter color.
This creates a smooth edge effect.



4. Pixel Phasing

Idea

The computer slightly changes pixel brightness near edges.

Example:

Dark pixel
Medium pixel
Light pixel

### 
 ## 
  #

By changing brightness, the edge looks smoother.


Very Simple Summary

| Method          | Idea                                |
| --------------- | ----------------------------------- |
| High Resolution | Use more pixels                     |
| Supersampling   | Divide pixels into small parts      |
| Pre Filtering   | Calculate how much pixel is covered |
| Pixel Phasing   | Adjust pixel brightness             |


One Line Definition (for exam)

Anti-Aliasing is a technique used to remove jagged edges in computer graphics and produce smooth 
images.
      
      `
    },
    {
      id: 16,
      question: "16. Explain 2D Transformations.",
      answer: "📌 Write definition + matrix",
      codeExample: `
⭐ VERY IMPORTANT TRANSFORMATION QUESTIONS
These are almost guaranteed.

What is 2D Transformation?

In 2D Transformation, we change the position, size, or shape of an object in 2D space (x, y plane).

Example:

Move an object
Rotate an object
Increase size
Flip shape

All these are transformations.


Types of 2D Transformations

We will learn 5 types:

1. Translation
2. Rotation
3. Scaling
4. Reflection
5. Shearing
      


-----------------------------------------
TRANSLATION IN 2D TRANSFORMATION
-----------------------------------------

Definition:
Translation moves an object from one position to another 
without changing its size, shape, or orientation.

If a point P(x, y) is translated by:
Tx = translation in x-direction
Ty = translation in y-direction

New coordinates become:

x' = x + Tx
y' = y + Ty


-----------------------------------------
HOMOGENEOUS COORDINATES
-----------------------------------------

To use matrix multiplication in computer graphics,
we convert the point (x, y) into homogeneous form:

P = (x, y, 1)


-----------------------------------------
2D TRANSLATION MATRIX
-----------------------------------------

T = | 1   0   Tx |
    | 0   1   Ty |
    | 0   0   1  |


-----------------------------------------
MATRIX MULTIPLICATION
-----------------------------------------

| 1  0  Tx |     | x |     | x' |
| 0  1  Ty |  ×  | y |  =  | y' |
| 0  0  1  |     | 1 |     | 1  |


After multiplication:

x' = x + Tx
y' = y + Ty


-----------------------------------------
EXAMPLE
-----------------------------------------

Original Point:
P(2, 3)

Translation values:
Tx = 4
Ty = 2

Translation Matrix:

| 1  0  4 |
| 0  1  2 |
| 0  0  1 |

Point Matrix:

| 2 |
| 3 |
| 1 |

Multiplication:

x' = (1*2) + (0*3) + (4*1) = 6
y' = (0*2) + (1*3) + (2*1) = 5

New Point:
P'(6, 5)


-----------------------------------------
KEY POINTS
-----------------------------------------

1. Translation moves an object from one location to another.
2. Shape and size do NOT change.
3. Translation uses Tx and Ty values.
4. Homogeneous coordinates (x, y, 1) are used.
5. Translation matrix is 3×3.


------------------------------------------------------------------------------------


-----------------------------------------
ROTATION IN 2D TRANSFORMATION
-----------------------------------------

Definition:
Rotation means turning an object around a fixed point
(usually the origin) by a certain angle.

Rotation changes the orientation of the object
but the shape and size remain the same.

Angle of rotation = θ (theta)

Positive angle  → Counter-clockwise rotation
Negative angle  → Clockwise rotation


-----------------------------------------
ROTATION FORMULA
-----------------------------------------

If a point P(x, y) is rotated by angle θ about the origin,
the new coordinates become:

x' = x cosθ − y sinθ
y' = x sinθ + y cosθ


-----------------------------------------
2D ROTATION MATRIX
-----------------------------------------

R = | cosθ   -sinθ |
    | sinθ    cosθ |


-----------------------------------------
MATRIX MULTIPLICATION
-----------------------------------------

| cosθ  -sinθ |     | x |     | x' |
| sinθ   cosθ |  ×  | y |  =  | y' |


After multiplication:

x' = x cosθ − y sinθ
y' = x sinθ + y cosθ


-----------------------------------------
EXAMPLE
-----------------------------------------

Rotate point P(1, 0) by 90° counter-clockwise.

Values:
cos90° = 0
sin90° = 1

Rotation Matrix:

| 0  -1 |
| 1   0 |

Point Matrix:

| 1 |
| 0 |

Multiplication:

x' = (0*1) + (-1*0) = 0
y' = (1*1) + (0*0) = 1

New Point:
P'(0, 1)


-----------------------------------------
KEY POINTS
-----------------------------------------

1. Rotation turns an object around a fixed point.
2. Shape and size do NOT change.
3. Angle θ determines how much the object rotates.
4. Rotation matrix uses cosθ and sinθ.
5. Counter-clockwise rotation is considered positive.


------------------------------------------------------------------------------------


-----------------------------------------
SCALING IN 2D TRANSFORMATION
-----------------------------------------

Definition:
Scaling changes the size of an object in computer graphics.

It can either enlarge or shrink the object.

Sx = scaling factor in x-direction
Sy = scaling factor in y-direction


-----------------------------------------
SCALING FORMULA
-----------------------------------------

x' = Sx * x
y' = Sy * y


-----------------------------------------
2D SCALING MATRIX
-----------------------------------------

S = | Sx   0 |
    | 0    Sy |


-----------------------------------------
MATRIX MULTIPLICATION
-----------------------------------------

| Sx  0 |     | x |     | x' |
| 0  Sy |  ×  | y |  =  | y' |


After multiplication:

x' = Sx * x
y' = Sy * y


-----------------------------------------
EXAMPLE
-----------------------------------------

Original Point:
P(2, 3)

Scaling factors:
Sx = 2
Sy = 3

Scaling Matrix:

| 2  0 |
| 0  3 |

Point Matrix:

| 2 |
| 3 |

Multiplication:

x' = 2 * 2 = 4
y' = 3 * 3 = 9

New Point:
P'(4, 9)


-----------------------------------------
KEY POINTS
-----------------------------------------

1. Scaling changes the size of an object.
2. Shape remains the same.
3. Uses scaling factors Sx and Sy.
4. If Sx = Sy → Uniform scaling.
5. If Sx ≠ Sy → Differential scaling.


------------------------------------------------------------------------------------


-----------------------------------------
REFLECTION IN 2D TRANSFORMATION
-----------------------------------------

Definition:
Reflection creates a mirror image of an object
with respect to a line or axis.

The size and shape of the object remain the same,
but the orientation is reversed.


-----------------------------------------
REFLECTION ABOUT X-AXIS
-----------------------------------------

Formula:

x' = x
y' = -y

Matrix:

| 1   0 |
| 0  -1 |

Example:
(3,4) → (3,-4)


-----------------------------------------
REFLECTION ABOUT Y-AXIS
-----------------------------------------

Formula:

x' = -x
y' = y

Matrix:

| -1   0 |
|  0   1 |

Example:
(3,4) → (-3,4)


-----------------------------------------
REFLECTION ABOUT ORIGIN
-----------------------------------------

Formula:

x' = -x
y' = -y

Matrix:

| -1   0 |
|  0  -1 |

Example:
(3,4) → (-3,-4)


-----------------------------------------
KEY POINTS
-----------------------------------------

1. Reflection produces a mirror image.
2. Shape and size do not change.
3. Only the direction/orientation changes.
4. Reflection can occur about X-axis, Y-axis,
   origin, or line y = x.


------------------------------------------------------------------------------------


-----------------------------------------
SHEARING IN 2D TRANSFORMATION
-----------------------------------------

Definition:
Shearing is a transformation that shifts one part
of an object in a particular direction while
keeping the other part fixed.

It changes the shape of the object but the area
remains the same.

Shearing makes objects look slanted or tilted.

Shx = shear factor in x-direction
Shy = shear factor in y-direction


-----------------------------------------
X-SHEARING FORMULA
-----------------------------------------

x' = x + Shx * y
y' = y


-----------------------------------------
X-SHEARING MATRIX
-----------------------------------------

Shx = | 1   Shx |
      | 0    1  |


-----------------------------------------
MATRIX MULTIPLICATION
-----------------------------------------

| 1  Shx |     | x |     | x' |
| 0   1  |  ×  | y |  =  | y' |


After multiplication:

x' = x + Shx * y
y' = y


-----------------------------------------
Y-SHEARING FORMULA
-----------------------------------------

x' = x
y' = y + Shy * x


-----------------------------------------
Y-SHEARING MATRIX
-----------------------------------------

Shy = | 1   0 |
      | Shy 1 |


-----------------------------------------
MATRIX MULTIPLICATION
-----------------------------------------

| 1   0 |     | x |     | x' |
| Shy 1 |  ×  | y |  =  | y' |


After multiplication:

x' = x
y' = y + Shy * x


-----------------------------------------
EXAMPLE
-----------------------------------------

Original Point:
P(2,3)

Shear factor:
Shx = 2

X-Shearing Matrix:

| 1  2 |
| 0  1 |

Point Matrix:

| 2 |
| 3 |

Multiplication:

x' = 2 + (2*3) = 8
y' = 3

New Point:
P'(8,3)


-----------------------------------------
KEY POINTS
-----------------------------------------

1. Shearing shifts part of the object.
2. Shape changes but area remains the same.
3. There are two types: X-shear and Y-shear.
4. X-shear shifts points horizontally.
5. Y-shear shifts points vertically.


------------------------------------------------------------------------------------



      `
    },
    {
      id: 17,
      question: "17. SHORT QUESTIONS",
      answer: "",
      codeExample: `
Just read these:

Regular vs Irregular polygon
Convex vs Concave polygon
Inside Outside Test (Odd-Parity rule)
Homogeneous coordinate system
Character generation methods
      
      `
    },
    {
      id: 21,
      question: "21. Explain Window and Viewport with diagram.",
      answer: "📌 Very common theory question.",
      codeExample: `
1️⃣ What is a Window?

A Window is the area of the scene we choose to see.
Imagine a large picture, but you look at only one small part.
That selected part is called Window.

Example

Think of a map of India, but you only want to see Gujarat.
The selected part (Gujarat) = Window

Diagram

Whole Scene (World Coordinate)

+-----------------------------+
|                             |
|       +-----------+         |
|       |  WINDOW   |         |
|       | (selected |         |
|       |   area)   |         |
|       +-----------+         |
|                             |
+-----------------------------+

The small box is the Window.



2️⃣ What is a Viewport?

A Viewport is the area on the screen where the window is displayed.

So:

Window → what part of scene we select
Viewport → where it appears on screen

Diagram
Screen (Display Device)

+-----------------------------+
|                             |
|      +-----------+          |
|      | VIEWPORT  |          |
|      | (display  |          |
|      |   area)   |          |
|      +-----------+          |
|                             |
+-----------------------------+

The selected window is shown inside this viewport.



3️⃣ Relationship (Very Important)

Process:

World Scene
     ↓
Select Window
     ↓
Map it to Viewport
     ↓
Display on Screen

So the window content is mapped to the viewport.


4️⃣ Simple Real-Life Example

Imagine:

📷 Camera

Camera frame = Window
Phone screen where photo appears = Viewport



5️⃣ Difference Between Window and Viewport

| Window                              | Viewport                         |
| ----------------------------------- | -------------------------------- |
| Area selected from the world scene  | Area on the display screen       |
| Defined in world coordinates        | Defined in screen coordinates    |
| Shows what part of scene to display | Shows where it appears on screen |
| Exists in virtual world             | Exists on display device         |



6️⃣ Very Short Exam Definition

Window:
A window is the selected area of the world coordinate system that we want to display.

Viewport:
A viewport is the area of the display device where the window is mapped.

      `
    },
    {
      id: 22,
      question: "22. Explain Viewing Transformation Pipeline.",
      answer: "📌 Important long answer.",
      codeExample: `
In Computer Graphics, objects are created in a big virtual world, but the computer must convert them 
step-by-step to screen pixels.

This process is called Viewing Transformation Pipeline.



Viewing Transformation Pipeline

It is the process of converting object coordinates from world space to screen display coordinates.

Simple flow:

World Coordinates
       ↓
Viewing Coordinates
       ↓
Normalized Coordinates
       ↓
Device Coordinates (Screen)



1️⃣ World Coordinate System (WCS)

This is the original coordinate system where objects are created.
All objects exist in a large virtual world.

Example coordinates:

A (10 , 20)
B (30 , 40)
C (50 , 60)


Diagram idea:

World Coordinate System

      Y
      |
      |        *
      |    *
      |
------|---------------- X
      |
      |           *

So WCS = complete scene or world space.



2️⃣ Viewing Coordinate System (VCS)

Now we choose which part of the world we want to see.
This is done by placing a camera or viewing position.
It converts world coordinates → viewer coordinates.
Think of it like placing a camera in the world.

Example:

    Camera sees only selected objects



3️⃣ Normalized Viewing Coordinates (NVC)

Now the selected area is scaled into a standard range.

Usually the range is:

    0 to 1

So all coordinates become normalized.

Example:

    Original range → 0 to 1 range

Example conversion:

    (20 , 40)  →  (0.4 , 0.6)

This makes calculations easier for the system.



4️⃣ Device Coordinates (DC)

Finally the normalized coordinates are converted into screen pixels.

Example screen resolution:

    800 × 600 pixels

Example:

    (0.4 , 0.6) → (320 , 360)

Now the point can be drawn on the monitor.



Complete Viewing Pipeline Diagram
You can draw this in the exam:

World Coordinate System
          ↓
Viewing Transformation
          ↓
Viewing Coordinate System
          ↓
Normalization
          ↓
Normalized Viewing Coordinates
          ↓
Device Mapping
          ↓
Device Coordinates (Screen)



Very Short Table (for quick revision)

| Stage                  | Meaning                            |
| ---------------------- | ---------------------------------- |
| WCS                    | Objects in virtual world           |
| Viewing Coordinates    | Scene relative to camera           |
| Normalized Coordinates | Coordinates scaled between 0 and 1 |
| Device Coordinates     | Final screen pixels                |

      `
    },
    {
      id: 23,
      question: "23. Explain Window to Viewport Transformation.",
      answer: "📌 Sometimes asked with formula explanation.",
      codeExample: `
Window to Viewport Transformation

It is the process of converting coordinates from the window to the viewport so that the selected scene 
appears correctly on the screen.


Simple meaning:

Selected scene (Window)
        ↓
Mapped to
        ↓
Screen area (Viewport)



Diagram (Very Important for Exam)
World Coordinate System

+----------------------------+
|                            |
|        +----------+        |
|        | Window   |        |
|        |   *      |        |
|        +----------+        |
|                            |
+----------------------------+


Screen (Display Device)

+----------------------------+
|                            |
|        +----------+        |
|        | Viewport |        |
|        |   *      |        |
|        +----------+        |
|                            |
+----------------------------+

The object inside the window appears inside the viewport.



1️⃣ Scaling Transformation

The size of the window and viewport may be different, so we must scale the object.

Example:

Window size  = 100 × 100
Viewport size = 500 × 500

So the object becomes larger.

Scaling formulas:

Sx = Viewport Width / Window Width
Sy = Viewport Height / Window Height

Meaning:

Sx → horizontal scaling
Sy → vertical scaling

This resizes the object to fit inside the viewport.



2️⃣ Translation

After scaling, the object must be moved to the correct viewport position.
So we apply translation.

Example:

Move object to viewport starting position
Translation moves the coordinates so they align with the viewport location.



3️⃣ Maintaining Relative Position

This means:

Objects inside the window keep their same relative positions after mapping.

Example:

Window

A        B
   C


After transformation:

Viewport

A        B
   C

The distance ratio between objects stays the same.

Only size and position change, not the layout.
Complete Transformation Idea



The process is:

1. Select Window
2. Scale objects to match viewport size
3. Translate to viewport position
4. Maintain relative position


Simple Table (for exam writing)

| Step              | Purpose                          |
| ----------------- | -------------------------------- |
| Scaling           | Adjust size to fit viewport      |
| Translation       | Move object to viewport position |
| Relative Position | Maintain object layout           |



One Line Exam Definition

Window to Viewport Transformation is the prceoss of mapping coordinates from the window to the 
viewport using scaling and translation while maintaining atirelve positions.
      

------------------------------------------------------------------------


Example: Window → Viewport Transformation

Given

Window coordinates

xwmin = 10
ywmin = 20
xwmax = 60
ywmax = 70


Viewport coordinates

xvmin = 100
yvmin = 200
xvmax = 300
yvmax = 400


Point inside window

P (20 , 40)

We want to find the viewport point (xv , yv).



Step 1️⃣ Find Window Size

Window width

= xwmax − xwmin
= 60 − 10
= 50

Window height

= ywmax − ywmin
= 70 − 20
= 50


Step 2️⃣ Find Viewport Size

Viewport width

= xvmax − xvmin
= 300 − 100
= 200

Viewport height

= yvmax − yvmin
= 400 − 200
= 200



Step 3️⃣ Scaling Factors

Sx = (xvmax − xvmin) / (xwmax − xwmin)
Sy = (yvmax − yvmin) / (ywmax − ywmin)

Calculate:

Sx = 200 / 50 = 4
Sy = 200 / 50 = 4



Step 4️⃣ Transformation Formula

Viewport coordinates:

xv = xvmin + (xw − xwmin) Sx
yv = yvmin + (yw − ywmin) Sy



Step 5️⃣ Substitute Values

X coordinate

xv = 100 + (20 − 10) × 4
xv = 100 + 10 × 4
xv = 100 + 40
xv = 140


Y coordinate

yv = 200 + (40 − 20) × 4
yv = 200 + 20 × 4
yv = 200 + 80
yv = 280


Final Answer

Window Point  : (20 , 40)
Viewport Point: (140 , 280)

So the point moves from window to viewport.



Short Exam Format (You Can Copy)

Sx = (xvmax − xvmin) / (xwmax − xwmin)
Sy = (yvmax − yvmin) / (ywmax − ywmin)

xv = xvmin + (xw − xwmin) Sx
yv = yvmin + (yw − ywmin) Sy

      `
    },
    {
      id: 24,
      question: "24. What is Clipping? Explain its types.",
      answer: "📌 Basic important question.",
      codeExample: `
1️⃣ First idea: What problem does clipping solve?

Imagine a window (visible area) on the screen.

+-------------+
|             |
|   Visible   |
|    Area     |
|             |
+-------------+


Some objects may be:

    inside the window
    outside the window
    partly inside

The computer should display only the part inside the window.
That process is called Clipping.


Simple Definition

Clipping is the process of removing the parts of objects that lie outside the viewing window.

Types:

Point Clipping
Line Clipping
Polygon Clipping
Curve Clipping
Text Clipping


Types of Clipping

1️⃣ Point Clipping

This checks whether a point lies inside the window or outside.

Window boundaries:

xmin ≤ x ≤ xmax
ymin ≤ y ≤ ymax

Example:

Window

+---------+
|         |
|   •A    |
|         |
+---------+

Point A is inside → it will be displayed.
If a point is outside → it will not be displayed.



2️⃣ Line Clipping

Sometimes a line crosses the window boundary.

Example:

Line before clipping

      /
     /
+---------+
|        /|
|       / |
|      /  |
+-----/---+

After clipping:

+---------+
|        /|
|       / |
|      /  |
+---------+

Only the part of line inside the window is shown.



3️⃣ Polygon Clipping

A polygon is a shape with many sides.

Example:

Triangle / Rectangle / Pentagon
If a polygon crosses the window boundary, the system removes the outside part.

Before clipping

     /\\ 
    /  \\ 
+--------+
|   /\\   |
|  /  \\  |
+--------+

After clipping

+--------+
|   /\\   |
|  /  \\  |
+--------+

Only the visible part remains.



4️⃣ Curve Clipping

This is used for curves like circles or arcs.

Example:

Circle before clipping

   ( )
 +------+
 |      |
 |      |
 +------+

After clipping:

 +------+
 |  )   |
 |      |
 +------+

Only the curve inside the window is shown.



5️⃣ Text Clipping

This is used when text goes outside the window.

Example:

Before clipping

HELLO WORLD
+------+
|HELLO |
|WORLD |
+------+

After clipping:

+------+
|HELLO |
|WORL  |
+------+

Only the text inside the window is displayed.



Quick Table (Good for Exam)

| Type             | Meaning                                |
| ---------------- | -------------------------------------- |
| Point Clipping   | Checks if a point is inside the window |
| Line Clipping    | Removes line parts outside window      |
| Polygon Clipping | Removes outside parts of polygons      |
| Curve Clipping   | Clips curves like circles              |
| Text Clipping    | Clips characters outside window        |

      `
    },
    {
      id: 25,
      question: "25. Explain Cohen–Sutherland Line Clipping Algorithm.",
      answer: "📌 Most important algorithm in this unit",
      codeExample: `
Explain:

Region codes
9 regions concept
Inside / outside test
Logical AND operation
      


Cohen–Sutherland Line Clipping Algorithm

It is a line clipping algorithm used to remove the parts of a line that lie outside the clipping window.
Only the portion inside the window is displayed.


1️⃣ 9 Regions Concept

The window divides the space into 9 regions.

        TOP-LEFT    TOP      TOP-RIGHT
           1001     1000       1010

        LEFT       WINDOW      RIGHT
           0001     0000       0010

        BOTTOM-LEFT BOTTOM  BOTTOM-RIGHT
           0101      0100       0110

Center region 0000 is the window.
All other regions are outside areas.
Each region has a 4-bit region code.



2️⃣ Region Codes

Each point of the line gets a 4-bit binary code.

The bits represent:

TOP
BOTTOM
RIGHT
LEFT

Example format:

TOP  BOTTOM  RIGHT  LEFT

Examples:

| Position        | Code |
| --------------- | ---- |
| Inside window   | 0000 |
| Left of window  | 0001 |
| Right of window | 0010 |
| Bottom          | 0100 |
| Top             | 1000 |

So every point of the line gets a region code.



3️⃣ Inside Test (Trivial Accept)

If both endpoints have region code 0000

Point1 = 0000
Point2 = 0000

Then the line is completely inside the window.

Result:

Accept the line (draw it completely)



4️⃣ Outside Test (Trivial Reject)

If the logical AND of both region codes ≠ 0

Example:

Point1 = 1000
Point2 = 1000

Logical AND:

1000
1000
-----
1000  (not zero)

This means the line is completely outside the window.

Result:

Reject the line



5️⃣ Logical AND Operation

The algorithm performs bitwise AND on the region codes.

Example:

Code1 = 1001
Code2 = 1000
1001
1000
-----
1000

If result ≠ 0, the line is outside.
If result = 0, the line may intersect the window and must be clipped.



6️⃣ Partial Line Case

If:

Code1 ≠ 0000
Code2 ≠ 0000
AND result = 0

Then the line crosses the window boundary.
The algorithm finds the intersection point with the window edge and clips the outside part.


Steps of the Algorithm (Exam Format)

1. Assign region codes to both endpoints of the line.
2. If both codes are 0000, accept the line.
3. If logical AND of codes ≠ 0, reject the line.
4. Otherwise, calculate the intersection with window boundary.
5. Replace the outside point with the intersection point.
6. Repeat until the line is accepted or rejected.


Small Diagram Idea for Exam

          1001 | 1000 | 1010
        -----------------------
          0001 | 0000 | 0010
        -----------------------
          0101 | 0100 | 0110

Middle region 0000 = clipping window.



Quick Revision Table

| Concept      | Meaning                         |
| ------------ | ------------------------------- |
| Region Code  | 4-bit code for point location   |
| 9 Regions    | Space divided around window     |
| Inside Test  | Both codes = 0000               |
| Outside Test | Logical AND ≠ 0                 |
| Clipping     | Find intersection and trim line |
      


-----------------------------------------------------------------------------


-----------------------------------------
COHEN–SUTHERLAND LINE CLIPPING EXAMPLE
-----------------------------------------

Clipping Window:

xmin = 10
xmax = 50
ymin = 10
ymax = 50


-----------------------------------------
LINE ENDPOINTS
-----------------------------------------

P1 (5 , 20)
P2 (40 , 60)

We must check if the line is inside or outside
the clipping window.


-----------------------------------------
STEP 1 : FIND REGION CODES
-----------------------------------------

Region code format:

TOP  BOTTOM  RIGHT  LEFT


For Point P1 (5 , 20)

Check position:

x = 5  < xmin (10)  → LEFT
y = 20 is inside vertical range

Region code:

0001


For Point P2 (40 , 60)

Check position:

x = 40 inside horizontal range
y = 60 > ymax (50) → TOP

Region code:

1000


-----------------------------------------
STEP 2 : INSIDE TEST
-----------------------------------------

If both region codes = 0000
→ line is completely inside.

Here:

P1 = 0001
P2 = 1000

So the line is NOT completely inside.


-----------------------------------------
STEP 3 : OUTSIDE TEST (LOGICAL AND)
-----------------------------------------

0001
1000
-----
0000

Result = 0000

So the line is NOT completely outside.

Meaning:
The line partially intersects the window.

Therefore the line must be clipped.


-----------------------------------------
STEP 4 : FIND INTERSECTION
-----------------------------------------

We clip the point that is outside.

P1 is LEFT → intersect with left boundary.

Left boundary:

x = xmin = 10


Line equation:

y = y1 + (y2 − y1) * (x − x1) / (x2 − x1)


Substitute values:

y = 20 + (60 − 20) * (10 − 5) / (40 − 5)

y = 20 + 40 * 5 / 35

y ≈ 20 + 5.7

y ≈ 25.7


New point:

P1' (10 , 25.7)


-----------------------------------------
STEP 5 : CLIP TOP POINT
-----------------------------------------

P2 is TOP → intersect with top boundary.

Top boundary:

y = ymax = 50


Formula:

x = x1 + (x2 − x1) * (y − y1) / (y2 − y1)


Substitute values:

x = 5 + (40 − 5) * (50 − 20) / (60 − 20)

x = 5 + 35 * 30 / 40

x = 5 + 26.25

x ≈ 31.25


New point:

P2' (31.25 , 50)


-----------------------------------------
FINAL CLIPPED LINE
-----------------------------------------

Original Line:

P1 (5 , 20)
P2 (40 , 60)

After Clipping:

P1' (10 , 25.7)
P2' (31.25 , 50)

Only this portion of the line inside the
clipping window is drawn.


-----------------------------------------
SIMPLE VISUAL
-----------------------------------------

Before Clipping

       *
      /
     /
+---------+
|        /
|       /
|      *
+---------+


After Clipping

+---------+
|        *
|       /
|      *
+---------+


-----------------------------------------
LOGICAL AND (BITWISE AND)
-----------------------------------------

Logical AND compares two binary numbers.

Rule:

Bit1   Bit2   Result
0      0      0
0      1      0
1      0      0
1      1      1


Important rule:

Only 1 AND 1 = 1
All other cases = 0

`
    },
    {
      id: 27,
      question: "27. Explain Polygon Clipping (Sutherland–Hodgman Algorithm).",
      answer: "📌 Important algorithm question.",
      codeExample: `
1️⃣ Idea of Polygon Clipping

Polygon clipping removes the parts of a polygon that lie outside the clipping window and keeps only the 
visible portion inside the window.

One commonly used algorithm is:

Sutherland–Hodgman Polygon Clipping Algorithm

It clips the polygon edge by edge against the boundaries of the clipping window.


2️⃣ How the Algorithm Works

The clipping window has four boundaries:

Left boundary
Right boundary
Bottom boundary
Top boundary

The polygon is processed one boundary at a time.

After clipping against one boundary, the resulting vertices become the input for the next boundary.



3️⃣ Clipping Polygon Edges

The algorithm checks each edge of the polygon.
For each pair of vertices:

Previous vertex
Current vertex

It determines whether the points are inside or outside the boundary.


There are four possible cases.

| Case | Previous | Current | Action                               |
| ---- | -------- | ------- | ------------------------------------ |
| 1    | Inside   | Inside  | Output current vertex                |
| 2    | Inside   | Outside | Output intersection point            |
| 3    | Outside  | Inside  | Output intersection + current vertex |
| 4    | Outside  | Outside | Output nothing                       |


-----------------------------------------
CLIPPING POLYGON EDGES
-----------------------------------------

The polygon is processed edge by edge.

For each pair of vertices:
Previous vertex
Current vertex

The algorithm determines whether the points
are inside or outside the clipping boundary.

Four cases are considered:

Case 1:
Previous inside, Current inside
→ Output current vertex

Case 2:
Previous inside, Current outside
→ Output intersection point

Case 3:
Previous outside, Current inside
→ Output intersection point and current vertex

Case 4:
Previous outside, Current outside
→ Output nothing



PROCESSING AGAINST BOUNDARIES
-----------------------------------------

The polygon is clipped against each boundary
of the clipping window sequentially.

Boundaries are:

1. Left boundary
2. Right boundary
3. Bottom boundary
4. Top boundary

After clipping against one boundary,
the resulting polygon becomes the input
for the next boundary.



-------------------------------------------------------

-----------------------------------------
PREVIOUS AND CURRENT VERTEX
(SUTHERLAND–HODGMAN ALGORITHM)
-----------------------------------------

1️⃣ WHAT IS PREVIOUS AND CURRENT VERTEX?

When clipping a polygon, the algorithm checks
each edge of the polygon one by one.

An edge is formed by two vertices.

Example polygon vertices:

A → B → C → D → A


While processing edges:

Edge    Previous Vertex    Current Vertex
AB      A                  B
BC      B                  C
CD      C                  D
DA      D                  A


So:

Previous vertex = starting point of the edge
Current vertex  = ending point of the edge

The algorithm moves around the polygon
vertex by vertex.


-----------------------------------------
2️⃣ SIMPLE POLYGON EXAMPLE
-----------------------------------------

Polygon:

A(20,20)
B(60,20)
C(60,60)
D(20,60)

Traversal order:

A → B → C → D → A


Edges processed:

Edge 1 : A → B
Edge 2 : B → C
Edge 3 : C → D
Edge 4 : D → A


For edge AB

Previous = A
Current  = B


For edge BC

Previous = B
Current  = C


-----------------------------------------
3️⃣ DIAGRAM (POLYGON + CLIPPING WINDOW)
-----------------------------------------

Example clipping window:

          C
          *
      +---------+
      |         |
      |   * D   |
      |         |
      +---------+
  A *            * B


Polygon vertices:

A ---- B
|      |
|      |
D ---- C


Clipping window:

+---------+
|         |
|         |
|         |
+---------+

The algorithm checks each edge
against the window boundaries.


-----------------------------------------
4️⃣ EDGE PROCESSING DIAGRAM
-----------------------------------------

Example edge:

Previous (P) -------- Current (C)


CASE 1 — BOTH INSIDE

+-------------+
|   P ---- C  |
|             |
+-------------+

Output:
C


CASE 2 — INSIDE → OUTSIDE

+-------------+
|   P ---- *  |
|        /    |
+------X------+
         C

Output:
Intersection point


CASE 3 — OUTSIDE → INSIDE

      P
      *
+------X------+
|      /      |
|     C       |
+-------------+

Output:
Intersection + C


CASE 4 — OUTSIDE → OUTSIDE

P -------- C

+-------------+
|             |
|             |
+-------------+

Output:
Nothing


-----------------------------------------
5️⃣ SIMPLE RULE TO REMEMBER
-----------------------------------------

While checking each edge:

Previous = first vertex of edge
Current  = next vertex of edge


The algorithm moves like this:

P = first vertex
C = next vertex

Process edge P → C

Then move forward:

P = C
C = next vertex
      
      `
    },
    {
      id: 28,
      question: "28. 2–3 MARK QUESTIONS",
      answer: "",
      codeExample: `
-----------------------------------------
POINT CLIPPING CONDITIONS
-----------------------------------------

Point clipping determines whether a point
lies inside or outside the clipping window.

A point P(x, y) is inside the clipping window if:

xmin ≤ x ≤ xmax
ymin ≤ y ≤ ymax

If both conditions are satisfied:
→ Point is accepted.

If any condition is not satisfied:
→ Point is rejected.


-----------------------------------------
REGION CODE MEANING
-----------------------------------------

Region code (Outcode) is a 4-bit binary code
used in the Cohen–Sutherland Line Clipping Algorithm.

It represents the position of a point relative
to the clipping window.

Bit order:

TOP  BOTTOM  RIGHT  LEFT

Meaning:

0000 → Point is inside the window
1000 → Point is above the window
0100 → Point is below the window
0010 → Point is right of the window
0001 → Point is left of the window

Region codes help quickly determine whether
a line is inside, outside, or partially inside
the clipping window.


-----------------------------------------
VIEW VOLUME
-----------------------------------------

View volume is the 3D region of space that
contains the objects to be displayed.

Only the objects inside the view volume
are visible on the screen.

Objects outside the view volume are clipped.

The view volume acts as the viewing area
for 3D graphics.


-----------------------------------------
NORMALIZED VIEW VOLUME
-----------------------------------------

Normalized view volume is a standard
coordinate system used in computer graphics.

After viewing transformation, the view volume
is mapped into a normalized cube.

The coordinates are typically transformed
into the range:

0 ≤ x ≤ 1
0 ≤ y ≤ 1
0 ≤ z ≤ 1

This standard form simplifies further
processing and rendering in the graphics system.
      
      `
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 11111,
      question: "Mid Paper.",
      answer: "",
      codeExample: `
=========================================
GRAPHICS PROGRAMMING - SOLVED PAPER
=========================================


-----------------------------------------
Q1 (a) (i)
Question: Define Flood Fill Algorithm.
-----------------------------------------

Answer:
Flood Fill Algorithm is used to fill a connected
region with a specified color starting from a
seed point until the boundary is reached.


-----------------------------------------
Q1 (a) (ii)
Question: What is 2D Translation transformation?
-----------------------------------------

Answer:
2D Translation is a transformation that moves
an object from one position to another by adding
a constant value to its coordinates.

x' = x + tx
y' = y + ty


-----------------------------------------
Q1 (a) (iii)
Question: What is a Viewport?
-----------------------------------------

Answer:
Viewport is the rectangular area on the display
screen where the final image is shown.


-----------------------------------------
Q1 (b) MCQs
-----------------------------------------

1. Flood Fill Algorithm
2. Bresenham’s Algorithm
3. Translation
4. Viewport
5. Line style
6. (0, r)
7. Antialiasing



-----------------------------------------
Q2 (a) (i)
Question: Difference between DDA and Bresenham
-----------------------------------------

Answer:

DDA Algorithm:
- Uses floating point calculations
- Slower
- Less efficient

Bresenham Algorithm:
- Uses integer calculations
- Faster
- More efficient


-----------------------------------------
Q2 (a) (ii)
Question: Difference between Flood Fill and Boundary Fill
-----------------------------------------

Answer:

Flood Fill:
- Fills area until boundary color is found
- Uses interior color

Boundary Fill:
- Fills area until boundary is reached
- Uses boundary color


-----------------------------------------
Q2 (b) (i)
Question: Raster Scan vs Random Scan
-----------------------------------------

Answer:

Raster Scan:
- Draws image line by line
- Used in TV, monitors
- Advantage: Simple and low cost

Random Scan:
- Draws only required lines
- Used in vector displays
- Advantage: High resolution


-----------------------------------------
Q2 (b) (ii)
Question: Midpoint Circle vs Bresenham Circle
-----------------------------------------
-----------------------------------------
MIDPOINT CIRCLE vs BRESENHAM CIRCLE
-----------------------------------------

-----------------------------------------
MIDPOINT CIRCLE ALGORITHM
-----------------------------------------

Definition:
Midpoint Circle Algorithm is used to draw a
circle using a decision parameter to choose
the next pixel.

It checks whether the midpoint is inside or
outside the circle.


-----------------------------------------
INITIAL VALUES
-----------------------------------------

x = 0
y = r

Decision parameter:

p = 1 - r


-----------------------------------------
ALGORITHM STEPS
-----------------------------------------

1. Input radius r and center (xc , yc)
2. Initialize x = 0, y = r
3. Calculate p = 1 - r
4. Plot initial point (x , y)

5. While x < y:

   If p < 0:
      x = x + 1
      p = p + 2x + 1

   Else:
      x = x + 1
      y = y - 1
      p = p + 2x + 1 - 2y

6. Plot symmetric points using 8-way symmetry


-----------------------------------------
FEATURES
-----------------------------------------

✔ Uses decision parameter
✔ Based on midpoint concept
❌ May involve floating calculations


-----------------------------------------
BRESENHAM CIRCLE ALGORITHM
-----------------------------------------

Definition:
Bresenham Circle Algorithm is an efficient
algorithm that uses only integer calculations
to draw a circle.


-----------------------------------------
INITIAL VALUES
-----------------------------------------

x = 0
y = r

Decision parameter:

p = 3 - 2r


-----------------------------------------
ALGORITHM STEPS
-----------------------------------------

1. Input radius r and center (xc , yc)
2. Initialize x = 0, y = r
3. Calculate p = 3 - 2r
4. Plot initial point (x , y)

5. While x < y:

   If p < 0:
      x = x + 1
      p = p + 4x + 6

   Else:
      x = x + 1
      y = y - 1
      p = p + 4x + 6 - 4y

6. Plot symmetric points using 8-way symmetry


-----------------------------------------
FEATURES
-----------------------------------------

✔ Uses only integer arithmetic
✔ Faster and more efficient
✔ Widely used in graphics systems


-----------------------------------------
DIFFERENCE BETWEEN BOTH
-----------------------------------------

Midpoint Circle:
- Uses p = 1 - r
- Concept based on midpoint
- Slightly slower
- May use floating operations

Bresenham Circle:
- Uses p = 3 - 2r
- Uses integer calculations only
- Faster and efficient
- More practical for implementation




-----------------------------------------
Q3 (i)
Question: Scan-line Polygon Fill Algorithm
-----------------------------------------

Answer:

Steps:
1. Find intersections of scan line with polygon edges
2. Sort intersection points
3. Fill pixels between pairs of intersections
4. Repeat for all scan lines

Used to fill polygons efficiently.


-----------------------------------------
Q3 (ii)
Question: Transformation of point P(2,3)
-----------------------------------------

Answer:

Given:
P = (2,3)

Step 1: Translation (2,1)
(2+2 , 3+1) = (4,4)

Step 2: Rotation 90° anticlockwise
(x,y) → (-y,x)

(4,4) → (-4,4)

Step 3: Scaling (2,2)
(-4×2 , 4×2) = (-8 , 8)

Final Answer:
(-8 , 8)


-----------------------------------------
Q3 (iii)
Question: Importance of Computer Graphics
-----------------------------------------

Answer:

1. Education:
Visual learning, simulations

2. Medical:
CT scan, MRI visualization

3. Entertainment:
Games, movies, animation

CG improves understanding and visualization.



-----------------------------------------
Q4 (a)
Question: DDA Line from (2,3) to (10,7)
-----------------------------------------

-----------------------------------------
DDA LINE DRAWING ALGORITHM
-----------------------------------------

1. Input: (x1, y1) and (x2, y2)
2. Calculate:
   dx = x2 - x1
   dy = y2 - y1
3. steps = max(|dx|, |dy|)
4. x_inc = dx / steps
   y_inc = dy / steps
5. Initialize:
   x = x1
   y = y1
6. Plot (x, y)
7. Repeat for steps:
   x = x + x_inc
   y = y + y_inc
   Plot (round(x), round(y))


-----------------------------------------
CALCULATION
-----------------------------------------

Given:
(2,3) to (10,7)

dx = 8
dy = 4

steps = 8

x_inc = 1
y_inc = 0.5


-----------------------------------------
POINTS
-----------------------------------------

(2,3)
(3,3.5)
(4,4)
(5,4.5)
(6,5)
(7,5.5)
(8,6)
(9,6.5)
(10,7)


-----------------------------------------
Q4 (b)
Question: Rotation of point (3,4)
-----------------------------------------

-----------------------------------------
2D ROTATION ALGORITHM
-----------------------------------------

1. Input point (x, y)
2. Choose angle θ
3. Apply formula:

x' = x cosθ - y sinθ
y' = x sinθ + y cosθ


-----------------------------------------
FOR 90° ANTICLOCKWISE
-----------------------------------------

cos90 = 0
sin90 = 1

So:

x' = -y
y' = x


-----------------------------------------
CALCULATION
-----------------------------------------

Given:
(3,4)

x' = -4
y' = 3

Final Answer:
(-4 , 3)


-----------------------------------------
Q4 (b) OR
Question: Bresenham Line from (0,0) to (6,3)
-----------------------------------------

-----------------------------------------
BRESENHAM LINE ALGORITHM
-----------------------------------------

1. Input: (x1, y1), (x2, y2)
2. Calculate:
   dx = x2 - x1
   dy = y2 - y1
3. Decision parameter:
   p = 2dy - dx
4. Initialize:
   x = x1
   y = y1
5. Plot (x, y)

6. Repeat until x = x2:

   If p < 0:
      x = x + 1
      p = p + 2dy

   Else:
      x = x + 1
      y = y + 1
      p = p + 2dy - 2dx

   Plot (x, y)


-----------------------------------------
CALCULATION
-----------------------------------------

dx = 6
dy = 3

p = 2dy - dx = 6 - 6 = 0


-----------------------------------------
POINTS
-----------------------------------------

(0,0)
(1,0)
(2,1)
(3,1)
(4,2)
(5,2)
(6,3)

`
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 31,
      question: "31. Explain Illumination Model",
      answer: "📌 Basic + very important theory",
      codeExample: `
⭐ Illumination Model  

🔹 Definition  
The Illumination Model is used to calculate how light falls on objects and how they appear on the screen.  

👉 In simple words:  
It tells how bright or dark a surface looks.  


🎯 Why we need it?  

Without illumination:  
Object → flat (no brightness)  

With illumination:  
Object → looks realistic (light, shadow, shine)  



⭐ Types of Light Sources  

1️⃣ Point Light Source  
- Light comes from one point  
- Example: Bulb 💡  

2️⃣ Directional Light Source  
- Light rays are parallel  
- Example: Sunlight ☀️  

3️⃣ Spot Light Source  
- Light in one direction (cone shape)  
- Example: Torch 🔦  



🎯 Think of ONE Example (Very Important)  

Imagine a ball under a light bulb 💡  

        💡  
         |  
        ( )  


Now we see 3 types of light on that ball 👇  



⭐ 1️⃣ Ambient Reflection (Most Easy)  

🔹 Real Life Idea  
Even if light is not directly on the ball,  
you can still see it  

👉 Because light is present everywhere  


🔹 Simple Meaning  
- Whole object is slightly visible  
- Same brightness everywhere  


🔹 Example  
(   )  

👉 Entire ball is light grey  



⭐ 2️⃣ Diffuse Reflection  

🔹 Real Life Idea  
Light falls on the ball  

👉 Side facing light becomes brighter  


🔹 Simple Meaning  
- Depends on angle of light  
- Not shiny  
- Like wall / paper  


🔹 Example  

   💡  
    \  
    (◐)  

Left side → bright  
Right side → dark  



⭐ 3️⃣ Specular Reflection ⭐ (IMPORTANT)  

🔹 Real Life Idea  
You see a small shiny white spot on the ball  


🔹 Simple Meaning  
- Very bright spot  
- Seen in mirror / metal  


🔹 Example  

   💡  
    \  
    (◐•)  

👉 • = shiny spot  



🔥 FINAL UNDERSTANDING (VERY IMPORTANT)  

Type        What you see on object  
-----------------------------------------  
Ambient     Full object slightly visible  
Diffuse     Light side bright, other side dark  
Specular    Small shiny spot  



💡 Super Easy Memory Trick  

Ambient  → See object  
Diffuse  → Shape of object  
Specular → Shine of object  



✅ One Line (Exam)  

Ambient gives base light, diffuse gives surface brightness based on angle, and specular gives shiny 
highlights.  
      
      `
    },
    {
      id: 32,
      question: "32. Explain Color Models",
      answer: "📌 Frequently asked question",
      codeExample: `
⭐ What is a Color Model?

Definition:
A Color Model is a method used to represent colors using numbers.

👉 Simple:
It tells the computer how to create colors.

🎨 Types of Color Models:
- RGB ⭐ (MOST IMPORTANT)
- CMY
- HSV ⭐


==================================================
1️⃣ RGB Color Model ⭐
==================================================

Idea:
RGB uses 3 basic colors:
- Red (R)
- Green (G)
- Blue (B)

👉 These colors combine to form all other colors.

Range:
Each value = 0 to 255

Examples:
(255, 0, 0)     → Red
(0, 255, 0)     → Green
(0, 0, 255)     → Blue
(255,255,255)   → White
(0,0,0)         → Black

Simple Diagram:
        Red
         ●
        / \\
       /   \\
      ●-----●
   Green   Blue

Where Used:
- TV
- Mobile
- Computer Screen

Key Points:
- Mixing more light = brighter color
- All combined = White



==================================================
2️⃣ CMY Color Model
==================================================

Idea:
CMY is used in printing.

Basic Colors:
- Cyan (C)
- Magenta (M)
- Yellow (Y)

Relation with RGB:
C = 1 − R
M = 1 − G
Y = 1 − B

Simple Meaning:
- Opposite of RGB
- Used in printers

Examples:
- Cyan absorbs Red
- Magenta absorbs Green
- Yellow absorbs Blue

Simple Diagram Idea:
RGB (Light)  →  CMY (Ink)
Opposite color system



==================================================
3️⃣ HSV Color Model ⭐
==================================================

Idea:
HSV represents color like humans see it.

Components:
H → Hue (color type)
S → Saturation (purity)
V → Value (brightness)


--------------------------------------------------
1. Hue (H)
--------------------------------------------------
👉 Type of color

Range:
0° to 360°

Examples:
0°   → Red
120° → Green
240° → Blue


--------------------------------------------------
2. Saturation (S)
--------------------------------------------------
👉 Purity of color

0 → Grey (no color)
1 → Pure color


--------------------------------------------------
3. Value (V)
--------------------------------------------------
👉 Brightness

0 → Black
1 → Bright color

Simple Diagram:
        (Top = Bright)
           ●
          / \\
         /   \\
        /     \\
       ●-------●
   (Color circle base)

🎯 Real-Life Understanding:
Hue        → Which color (Red/Blue)
Saturation → Pure or dull
Value      → Bright or dark




📊 SUMMARY TABLE

| Model | Components             | Used in       |
| ----- | ---------------------- | ------------- |
| RGB   | Red, Green, Blue       | Screens       |
| CMY   | Cyan, Magenta, Yellow  | Printing      |
| HSV   | Hue, Saturation, Value | Image editing |



==================================================
✅ ONE-LINE EXAM ANSWER
==================================================

Color models represent colors in computer graphics such as RGB for displays, CMY for 
printing, and HSV for intuitive color selection.
      
      `
    },
    {
      id: 33,
      question: "33. Explain 3D Transformations",
      answer: "📌 Important long answer",
      codeExample: `
⭐ What are 3D Transformations?

Definition:
3D Transformation is used to change position, size, or orientation of objects in 3D space.

👉 Coordinates used:
(x, y, z)

Example:
Cube, Sphere, etc.


==================================================
⭐ Types of 3D Transformations
==================================================
1. Translation
2. Scaling
3. Rotation ⭐
4. Composite Transformation ⭐


==================================================
1️⃣ Translation (Move Object)
==================================================

Idea:
Move object in x, y, z directions.

Formula:
x' = x + tx
y' = y + ty
z' = z + tz

Matrix:
| 1  0  0  tx |
| 0  1  0  ty |
| 0  0  1  tz |
| 0  0  0  1  |

Simple Diagram:
Before → (x, y, z)
          ↓ move
After  → (x+tx, y+ty, z+tz)

Example:
P(1,2,3)
tx=2, ty=1, tz=3

New Point:
(3,3,6)


==================================================
2️⃣ Scaling (Change Size)
==================================================

Idea:
Increase or decrease size.

Formula:
x' = x × sx
y' = y × sy
z' = z × sz

Matrix:
| sx  0   0   0 |
| 0   sy  0   0 |
| 0   0   sz  0 |
| 0   0   0   1 |

Simple Diagram:
Small Object → Enlarged Object

Example:
(1,2,3)
sx=2, sy=2, sz=2

→ (2,4,6)


==================================================
3️⃣ Rotation ⭐ (VERY IMPORTANT)
==================================================

Idea:
Rotate object around X, Y, Z axis.

----------------------------------
Rotation about X-axis
----------------------------------
| 1    0        0     0 |
| 0  cosθ   -sinθ    0 |
| 0  sinθ    cosθ    0 |
| 0    0        0     1 |

Effect:
👉 Up-down rotation

----------------------------------
Rotation about Y-axis
----------------------------------
| cosθ   0   sinθ   0 |
| 0      1     0    0 |
| -sinθ  0   cosθ   0 |
| 0      0     0    1 |

Effect:
👉 Left-right rotation

----------------------------------
Rotation about Z-axis
----------------------------------
| cosθ  -sinθ  0  0 |
| sinθ   cosθ  0  0 |
| 0        0   1  0 |
| 0        0   0  1 |

Effect:
👉 Like 2D rotation

Simple Diagram Idea:

Z-axis:
   ↻ (like circle rotation)

X-axis:
   ↑↓ tilt

Y-axis:
   ←→ turn


==================================================
4️⃣ Composite Transformation ⭐
==================================================

Idea:
Apply multiple transformations together.

Example Order:
Scale → Rotate → Translate

Formula:
Final Matrix = T × R × S

(T = Translation, R = Rotation, S = Scaling)

⚠ Important:
Order matters ❗

Rotate → Translate ≠ Translate → Rotate

Simple Diagram:
S → R → T
↓
Final Result


==================================================
📊 SUMMARY TABLE
==================================================

Transformation → Purpose
Translation    → Move object
Scaling        → Change size
Rotation       → Rotate object
Composite      → Combine operations


==================================================
✅ ONE-LINE EXAM ANSWER
==================================================

3D transformations are used to modify objects in 3D space using translation, scaling, rotation, and 
composite transformations.







⭐ 3D / Graphics QUICK TRICKS (EXAM REVISION)

==================================================
1️⃣ TRANSLATION TRICK
==================================================

Formula:
x' = x + tx
y' = y + ty
z' = z + tz

✅ Trick:
👉 Just ADD values

Example:
(2,3,4) + (1,2,3) = (3,5,7)

✔ Matrix NOT needed (unless asked)


==================================================
2️⃣ SCALING TRICK
==================================================

Formula:
x' = x × sx
y' = y × sy
z' = z × sz

✅ Trick:
👉 Just MULTIPLY values

Example:
(2,3,4) × (2,2,2) = (4,6,8)


==================================================
3️⃣ ROTATION TRICK ⭐ (MOST IMPORTANT)
==================================================

🔥 MUST REMEMBER VALUES:

Angle   cosθ   sinθ
0°      1      0
90°     0      1
180°   -1      0
270°    0     -1

----------------------------------
🔹 Z-axis Rotation (MOST USED)
----------------------------------

90°  → (x, y) → (-y, x)
180° → (x, y) → (-x, -y)
270° → (x, y) → (y, -x)

Example:
(2,3) → (-3,2)

----------------------------------
🔹 X-axis Rotation
----------------------------------

👉 Only y and z change

90° → (x, y, z) → (x, -z, y)

----------------------------------
🔹 Y-axis Rotation
----------------------------------

👉 Only x and z change

90° → (x, y, z) → (z, y, -x)


==================================================
4️⃣ REFLECTION TRICK
==================================================

X-axis   → (x , -y)
Y-axis   → (-x , y)
Origin   → (-x , -y)


==================================================
5️⃣ SHEARING TRICK
==================================================

X-direction:
x' = x + shx × y

Y-direction:
y' = y + shy × x


==================================================
6️⃣ WINDOW → VIEWPORT TRICK ⭐
==================================================

Formula:
xv = xvmin + (xw − xwmin) × Sx
yv = yvmin + (yw − ywmin) × Sy

Steps:
1. Find Sx, Sy
2. Substitute values
3. Solve step-by-step


==================================================
7️⃣ COHEN–SUTHERLAND TRICK
==================================================

0000 → INSIDE ✔
AND ≠ 0 → REJECT ❌
Else → CLIP ✂


==================================================
8️⃣ POLYGON CLIPPING TRICK
==================================================

IN → IN   → Keep point
IN → OUT  → Intersection
OUT → IN  → Intersection + Point
OUT → OUT → Nothing


==================================================
9️⃣ ILLUMINATION TRICK
==================================================

Ambient  → Whole object visible
Diffuse  → Light side bright
Specular → Shiny spot


==================================================
🔟 COLOR MODEL TRICK
==================================================

RGB → Screen
CMY → Printer
HSV → Human understanding


==================================================
🔥 FINAL GOLDEN RULE
==================================================

ADD       → Translation
MULTIPLY  → Scaling
ROTATE    → Use shortcut values






⭐ What is (2, 3, 4)?

Definition:
(2, 3, 4) is a point in 3D space.

Format:
(x, y, z)

So:
x = 2
y = 3
z = 4

👉 It represents a position in 3D space.


==================================================
🎯 WHERE USED IN EXAM
==================================================

👉 Question will GIVE this point.

Example:
Translate point P(2,3,4) by (1,2,3)

Here:
(2,3,4) → Given point
(1,2,3) → Transformation values


==================================================
⭐ HOW TO USE IT
==================================================

----------------------------------
1️⃣ TRANSLATION
----------------------------------

Given:
P(2,3,4)
tx=1, ty=2, tz=3

Formula:
x' = x + tx
y' = y + ty
z' = z + tz

Solution:
x' = 2 + 1 = 3
y' = 3 + 2 = 5
z' = 4 + 3 = 7

👉 New Point:
(3,5,7)


----------------------------------
2️⃣ SCALING
----------------------------------

Given:
P(2,3,4)
sx=2, sy=2, sz=2

Formula:
x' = x × sx
y' = y × sy
z' = z × sz

Solution:
x' = 2×2 = 4
y' = 3×2 = 6
z' = 4×2 = 8

👉 New Point:
(4,6,8)


----------------------------------
3️⃣ ROTATION (IDEA)
----------------------------------

Given:
P(2,3,4)

👉 After rotation:
- Values change position
- Signs may change
- Depends on axis (X, Y, Z)


==================================================
⭐ REAL LIFE MEANING
==================================================

(2,3,4) means:

2 steps → X direction
3 steps → Y direction
4 steps → Z direction

Simple Visualization:

       z
       ↑
       |
       |        • (2,3,4)
       |
       |
       +----------→ x
      /
     /
    ↓
    y


==================================================
⭐ IMPORTANT UNDERSTANDING
==================================================

👉 Values are NOT random
👉 Always given in question
👉 You only APPLY formula


==================================================
📊 QUICK SUMMARY
==================================================

Value        → Meaning
(2,3,4)      → Point position
(tx,ty,tz)   → Movement (Translation)
(sx,sy,sz)   → Size change (Scaling)


==================================================
🔥 FINAL CLARITY
==================================================

Given:
Point → (2,3,4)

Apply:
Transformation → Formula

Result:
New Point → Final Answer

      `
    },
    {
      id: 34,
      question: "34. Explain Projection in Computer Graphics",
      answer: "📌 Very important concept",
      codeExample: `
⭐ What is Projection?

Definition:
Projection is the process of converting a 3D object into a 2D view (screen).

👉 Simple Meaning:
3D → 2D conversion

👉 Used to display 3D objects on flat screens


==================================================
🎯 REAL-LIFE IDEA
==================================================

- Real world = 3D
- Screen / Photo = 2D

👉 Conversion = Projection

Example:
Mobile Camera 📱
3D scene → 2D image


==================================================
⭐ TYPES OF PROJECTION
==================================================

1. Parallel Projection
2. Perspective Projection ⭐


==================================================
1️⃣ PARALLEL PROJECTION
==================================================

Idea:
All projection lines are parallel.

Diagram:
|||||||||||||
|||||||||||||
|||||||||||||

Object:
   |----|
  /    /|
 |----| |
 |    | /
 |----|

👉 Lines do NOT meet

Key Features:
- No depth effect
- Same size (near = far)
- Looks flat

Example:
Near object = same size
Far object  = same size

Used In:
- Engineering drawings

Types (optional):
- Orthographic
- Oblique


==================================================
2️⃣ PERSPECTIVE PROJECTION ⭐
==================================================

Idea:
Projection lines meet at one point (eye/camera).

Diagram:
\\   |   /
 \\  |  /
  \\ | /
   \\|/

👉 Lines meet at a point

Object Example:
     /\\
    /  \\
   /____\\
    \\  /
     \\/

Key Features:
- Realistic view
- Near objects → BIG
- Far objects → SMALL

🎯 Real-Life Example:

Railway Track:

||        ||
||      ||
||    ||
||  ||
||||

👉 Lines appear to meet
👉 This is perspective effect


==================================================
📊 DIFFERENCE TABLE
==================================================

Feature      → Parallel        → Perspective
Lines        → Parallel        → Meet at a point
Size         → Same            → Smaller with distance
Realism      → Low             → High
Use          → Engineering     → Games, Movies


==================================================
🔥 EASY MEMORY TRICK
==================================================

Parallel   → Same size
Perspective→ Real life view


==================================================
✅ ONE-LINE EXAM ANSWER
==================================================

Projection is the method of converting 3D objects into 2D images using parallel and perspective projection techniques.
      




🎯 First Understand ONE Thing

👉 Your screen is flat (2D)
👉 But objects (cube, ball) are 3D

So computer must convert 3D → 2D

👉 That process = Projection


🔥 Real Life Example (Very Easy)

Example: Your Mobile Camera 📱
Real world = 3D
Photo = 2D

👉 That conversion = Projection


⭐ Two Types (Very Easy)

1️⃣ Parallel Projection

Idea

Imagine sunlight rays ☀️

||||||||||
||||||||||
||||||||||

👉 All rays are parallel

What happens?

👉 Objects look SAME SIZE
👉 No depth

Example

Near object = same size
Far object  = same size

👉 Looks flat (not realistic)


2️⃣ Perspective Projection ⭐

Idea

Imagine your eyes 👀 or camera

\\   |   /
 \\  |  /
  \\ | /
   \\|/

👉 All lines meet at one point

What happens?

👉 Near object = BIG
👉 Far object = SMALL


🎯 Real Example (VERY IMPORTANT)

Railway track:

||        ||
||      ||
||    ||
||  ||
||||

👉 Looks like lines meet
👉 This is Perspective Projection
      
      `
    },
    {
      id: 35,
      question: "35. Explain Hidden Surface Removal Techniques",
      answer: "📌 High scoring question",
      codeExample: `
⭐ Hidden Surface Removal

🎯 Definition

Hidden Surface Removal is the process of removing parts of objects that are NOT visible to the viewer.

👉 Simple meaning:
Show only FRONT visible parts
Hide BACK parts


🎯 Real Life Example

Think of a cube:

   ______
  /     /|
 /_____/ |
 |     | |
 |     | /
 |_____|/

👉 You cannot see the back side
👉 Only visible faces are shown


⭐ Techniques (Important)

1️⃣ Back Face Removal ⭐

👉 Idea:
Remove faces that are facing AWAY from the viewer

✔ Front face → Visible
❌ Back face → Hidden

👉 Rule:
If face is facing viewer → DRAW
If face is away → REMOVE

✔ Advantage:
Fast
Simple

❌ Disadvantage:
Works only for CLOSED objects


2️⃣ Depth Buffer (Z-buffer) ⭐

👉 Idea:
Store depth (Z value) for each pixel

👉 Rule:
Smaller Z → Near → SHOW
Larger Z → Far → HIDE

Example:
Object A → z = 2 (near)
Object B → z = 5 (far)

👉 Show A, hide B

Steps:
1. Initialize Z-buffer
2. Compare depth of each pixel
3. Keep nearest pixel

✔ Advantage:
Accurate
Works for all objects

❌ Disadvantage:
Uses more memory


3️⃣ Scan Line Method

👉 Idea:
Process image LINE BY LINE

Steps:
1. Take one horizontal line
2. Find visible surfaces
3. Draw visible parts
4. Move to next line

Example:
-------- Scan line --------
Check which surface is in front
Draw that part

✔ Advantage:
Efficient for polygons

❌ Disadvantage:
Complex to implement


⭐ Summary (Easy)

Back Face → remove back surfaces
Z-buffer  → check depth
Scan Line → line by line


🎯 Memory Trick

Back Face → Back remove
Z-buffer  → Depth check
Scan Line → Row by row


✅ One Line (Exam)

Hidden Surface Removal shows only visible parts of objects using 
Back Face Removal, Z-buffer, and Scan Line methods.
      `
    },
    {
      id: 36,
      question: "36. Explain Back Face Detection Algorithm",
      answer: "📌 Often asked",
      codeExample: `
⭐ Back Face Detection Algorithm

🎯 Definition

Back Face Detection is used to remove surfaces (faces) that are facing AWAY from the viewer.

👉 Simple meaning:
Do NOT draw back side of object


🎯 Real Life Idea

Think of a box:

   ______
  /     /|
 /_____/ |
 |     | |
 |     | /
 |_____|/

👉 Only front faces are visible
👉 Back faces are hidden


⭐ Key Concept

👉 Each surface has a NORMAL VECTOR
→ It tells direction of the surface

👉 Compare:
Surface Direction (Normal)
          vs
Viewer Direction


⭐ Condition (VERY IMPORTANT)

✔ Case 1: Visible Surface

Dot Product < 0
👉 Surface facing viewer
👉 DRAW it

❌ Case 2: Hidden Surface

Dot Product > 0
👉 Surface facing away
👉 REMOVE it


⭐ Easy Rule (No Formula Trick)

👉 If face is towards you → DRAW ✔
👉 If face is away → REMOVE ❌


⭐ Example

Viewer → 👀

   ______
  /     /|
 /_____/ |
 |     | |
 |     | /
 |_____|/

👉 Back faces are NOT drawn


⭐ Algorithm (Write in Exam)

1. Consider each surface of object

2. Find normal vector of surface

3. Compare with viewer direction

4. If surface faces viewer
   → Display it

5. Else
   → Remove it

6. Repeat for all surfaces


⭐ Advantages

✔ Fast
✔ Easy to implement


⭐ Disadvantages

❌ Works only for closed objects
❌ Cannot handle overlapping surfaces properly


⭐ Memory Trick

Front face → DRAW ✔
Back face  → REMOVE ❌


✅ One Line (Exam)

Back Face Detection removes surfaces facing away from the viewer using normal vector direction.
      





🧠 2–3 MARK (JUST READ)
RGB → Red, Green, Blue
HSV → Hue, Saturation, Value
Perspective → realistic view
Z-buffer → depth comparison
Back-face → remove invisible surfaces
      `
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1.1,
      question: "1. DDA Line Drawing Algorithm",
      answer: "",
      codeExample: `
#include <GL/glut.h>
#include <math.h>

void drawDDA(int x1, int y1, int x2, int y2) {
    float dx = x2 - x1;
    float dy = y2 - y1;
    float steps = (fabs(dx) > fabs(dy)) ? fabs(dx) : fabs(dy);

    float Xinc = dx / steps;
    float Yinc = dy / steps;

    float x = x1;
    float y = y1;

    glBegin(GL_POINTS);
    for (int i = 0; i <= (int)steps; i++) {
        glVertex2i(round(x), round(y));
        x += Xinc;
        y += Yinc;
    }
    glEnd();
    glFlush();
}

void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    // Draw a line from (50, 100) to (300, 250)
    drawDDA(50, 100, 300, 250);
}

void init() {
    glClearColor(0.0, 0.0, 0.0, 1.0); // Set background color to black
    glMatrixMode(GL_PROJECTION);
    gluOrtho2D(0, 500, 0, 500); // Set coordinate system
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("DDA Line Drawing Algorithm");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}

      
      `
    },
    {
      id: 2.2,
      question: "2. Bresenham's Line Drawing Algorithm",
      answer: "",
      codeExample: `
#include <GL/glut.h>
#include <stdlib.h>

/* Bresenham Line Drawing Algorithm */
void drawLine(int x0, int y0, int x1, int y1) {
    int dx = x1 - x0;
    int dy = y1 - y0;
    int p = 2 * dy - dx; // Initial decision parameter P0 = 2Δy - Δx
    int x = x0;
    int y = y0;

    glBegin(GL_POINTS);
    // Step 2: Plot the first point
    glVertex2i(x, y);

    // Step 5: Repeat Δx times
    for (int k = 0; k < dx; k++) {
        if (p < 0) {
            // Decision: Choose East pixel
            x = x + 1;
            p = p + 2 * dy;
        } else {
            // Decision: Choose North-East pixel
            x = x + 1;
            y = y + 1;
            p = p + 2 * dy - 2 * dx;
        }
        glVertex2i(x, y); // Plot next point
    }
    glEnd();
}

/* Display callback */
void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 0.0, 0.0); // Set line color to Red

    // Example: Line from (50, 100) to (300, 250)
    drawLine(50, 100, 300, 250);
    glFlush();
}

/* Initialize OpenGL */
void init() {
    glClearColor(1.0, 1.0, 1.0, 1.0); // White background
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(0, 500, 0, 500); // 2D coordinate system setup
}

/* Main function */
int main(int argc, char **argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Bresenham Line Drawing Algorithm");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}



      
      `
    },
    {
      id: 3.3,
      question: "3. Draw a circle using the Midpoint Circle Algorithm.",
      answer: "",
      codeExample: `
#include <GL/glut.h>
#include <stdio.h>

// Circle center and radius
int xc = 0, yc = 0, r;

/* Function to plot 8 symmetric points of the circle */
void plotPoints(int x, int y) {
    glBegin(GL_POINTS);
    glVertex2i(xc + x, yc + y);
    glVertex2i(xc - x, yc + y);
    glVertex2i(xc + x, yc - y);
    glVertex2i(xc - x, yc - y);
    glVertex2i(xc + y, yc + x);
    glVertex2i(xc - y, yc + x);
    glVertex2i(xc + y, yc - x);
    glVertex2i(xc - y, yc - x);
    glEnd();
}

/* Midpoint Circle Algorithm */
void drawCircle() {
    int x = 0;
    int y = r;
    int p = 1 - r; // Initial decision parameter

    plotPoints(x, y);

    while (x < y) {
        x++;
        if (p < 0) {
            p = p + 2 * x + 1;
        } else {
            y--;
            p = p + 2 * (x - y) + 1;
        }
        plotPoints(x, y);
    }
}

/* Display function */
void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 0.0, 0.0); // Red color for the circle
    glPointSize(2.0);         // Makes the line thicker

    drawCircle();
    glFlush();
}

/* Initialize OpenGL settings */
void init() {
    glClearColor(1.0, 1.0, 1.0, 1.0); // White background
    glMatrixMode(GL_PROJECTION);
    gluOrtho2D(-200, 200, -200, 200); // 2D coordinate system centered at (0,0)
}

/* Main function */
int main(int argc, char** argv) {
    printf("Enter radius: ");
    if (scanf("%d", &r) != 1) return 1;

    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Midpoint Circle Algorithm");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}


      `
    },
    {
      id: 4.4,
      question: "4. Implement Bresenham’s circle drawing algorithm to generate a circle.",
      answer: "",
      codeExample: `
#include <GL/glut.h>
#include <stdio.h>

int radius;

/* Function to plot 8-way symmetric points */
void plotCirclePoints(int xc, int yc, int x, int y) {
    glBegin(GL_POINTS);
    glVertex2i(xc + x, yc + y);
    glVertex2i(xc - x, yc + y);
    glVertex2i(xc + x, yc - y);
    glVertex2i(xc - x, yc - y);
    glVertex2i(xc + y, yc + x);
    glVertex2i(xc - y, yc + x);
    glVertex2i(xc + y, yc - x);
    glVertex2i(xc - y, yc - x);
    glEnd();
}

/* Bresenham's Circle Drawing Algorithm */
void drawCircle(int xc, int yc, int r) {
    int x = 0;
    int y = r;
    int d = 3 - 2 * r; // Initial decision parameter

    plotCirclePoints(xc, yc, x, y);

    while (x <= y) {
        x++;
        if (d < 0) {
            d = d + 4 * x + 6;
        } else {
            y--;
            d = d + 4 * (x - y) + 10;
        }
        plotCirclePoints(xc, yc, x, y);
    }
}

/* Display Function */
void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 0.0, 0.0); // Red color for the circle
    glPointSize(2.0);

    drawCircle(0, 0, radius); // Draw circle at origin (0,0)
    glFlush();
}

/* Initialization */
void init() {
    glClearColor(0.0, 0.0, 0.0, 1.0); // Black background
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(-200, 200, -200, 200); // Set coordinate system
}

/* Main Function */
int main(int argc, char** argv) {
    printf("Enter the radius of the circle: ");
    if (scanf("%d", &radius) != 1) return 1;

    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Bresenham Circle Drawing Algorithm");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}

      
      `
    },
    {
      id: 5.5,
      question: "5. Draw an ellipse using the Midpoint Ellipse Algorithm.",
      answer: "",
      codeExample: `
#include <GL/glut.h>
#include <stdio.h>
#include <math.h>

int rx, ry, xc = 0, yc = 0;

/* Function to plot 4 symmetric points of the ellipse */
void plotPoints(int x, int y) {
    glBegin(GL_POINTS);
    glVertex2i(xc + x, yc + y);
    glVertex2i(xc - x, yc + y);
    glVertex2i(xc + x, yc - y);
    glVertex2i(xc - x, yc - y);
    glEnd();
}

/* Midpoint Ellipse Algorithm */
void midpointEllipse() {
    float dx, dy, d1, d2, x, y;
    x = 0;
    y = ry;

    // Initial decision parameter for Region 1
    d1 = (ry * ry) - (rx * rx * ry) + (0.25 * rx * rx);
    dx = 2 * ry * ry * x;
    dy = 2 * rx * rx * y;

    // -------- Region 1 --------
    while (dx < dy) {
        plotPoints(x, y);
        if (d1 < 0) {
            x++;
            dx = dx + (2 * ry * ry);
            d1 = d1 + dx + (ry * ry);
        } else {
            x++;
            y--;
            dx = dx + (2 * ry * ry);
            dy = dy - (2 * rx * rx);
            d1 = d1 + dx - dy + (ry * ry);
        }
    }

    // Initial decision parameter for Region 2
    d2 = ((ry * ry) * ((x + 0.5) * (x + 0.5))) +
         ((rx * rx) * ((y - 1) * (y - 1))) -
         (rx * rx * ry * ry);

    // -------- Region 2 --------
    while (y >= 0) {
        plotPoints(x, y);
        if (d2 > 0) {
            y--;
            dy = dy - (2 * rx * rx);
            d2 = d2 + (rx * rx) - dy;
        } else {
            y--;
            x++;
            dx = dx + (2 * ry * ry);
            dy = dy - (2 * rx * rx);
            d2 = d2 + dx - dy + (rx * rx);
        }
    }
}

/* Display function */
void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 1.0, 1.0); // White ellipse
    midpointEllipse();
    glFlush();
}

/* Initialization */
void init() {
    glClearColor(0.0, 0.0, 0.0, 1.0); // Black background
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(-500, 500, -500, 500); // 2D coordinate system
}

/* Main function */
int main(int argc, char** argv) {
    printf("Enter rx: ");
    if (scanf("%d", &rx) != 1) return 1;
    printf("Enter ry: ");
    if (scanf("%d", &ry) != 1) return 1;

    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(800, 800);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Midpoint Ellipse Algorithm - OpenGL");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}

      
      `
    },
    {
      id: 6.6,
      question: "6. Scan-line",
      answer: "",
      codeExample: `
#include <GL/glut.h>
#include <stdio.h>
#include <stdlib.h>

int x[10], y[10];   // Polygon vertices
int n = 4;          // Number of vertices

// Function to draw a pixel
void drawPixel(int px, int py) {
    glBegin(GL_POINTS);
    glVertex2i(px, py);
    glEnd();
}

// Scan-line filling function
void scanline() {
    int i, j, k;
    int ymin = 500, ymax = 0;
    int interx[10];

    // Find ymin and ymax of the polygon
    for (i = 0; i < n; i++) {
        if (y[i] < ymin) ymin = y[i];
        if (y[i] > ymax) ymax = y[i];
    }

    // Move scanline from ymin to ymax
    for (int scan = ymin; scan <= ymax; scan++) {
        k = 0; // Reset intersection counter

        // Check each edge for intersection with the current scanline
        for (i = 0; i < n; i++) {
            int next = (i + 1) % n;

            // Ignore horizontal edges to avoid division by zero
            if (y[i] == y[next]) continue;

            // Check if scanline intersects the edge
            if (scan >= (y[i] < y[next] ? y[i] : y[next]) &&
                scan < (y[i] > y[next] ? y[i] : y[next])) {
                
                // Calculate x-intersection using the line equation
                interx[k] = x[i] + (float)(scan - y[i]) * (x[next] - x[i]) / (y[next] - y[i]);
                k++;
            }
        }

        // Sort intersection points (simple bubble sort)
        for (i = 0; i < k - 1; i++) {
            for (j = i + 1; j < k; j++) {
                if (interx[i] > interx[j]) {
                    int temp = interx[i];
                    interx[i] = interx[j];
                    interx[j] = temp;
                }
            }
        }

        // Fill pixels between pairs of intersections
        for (i = 0; i < k; i += 2) {
            for (j = interx[i]; j <= interx[i + 1]; j++) {
                drawPixel(j, scan);
            }
        }
    }
}

// Display function
void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 0.0, 0.0); // Red fill color
    scanline();
    glFlush();
}

// Initialization
void init() {
    glClearColor(1.0, 1.0, 1.0, 1.0); // White background
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(0, 500, 0, 500); // 2D coordinate system
}

// Main function
int main(int argc, char** argv) {
    // Define polygon vertices
    x[0] = 100; y[0] = 100;
    x[1] = 200; y[1] = 300;
    x[2] = 350; y[2] = 250;
    x[3] = 300; y[3] = 100;

    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Scan Line Polygon Fill - C");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}

      `
    },
    {
      id: 7.7,
      question: "7. boundary-fill",
      answer: "",
      codeExample: `
#include <GL/glut.h>
#include <stdio.h>

// Global colors
float boundaryColor[3] = {0.0, 0.0, 0.0}; // Black boundary
float fillColor[3]     = {1.0, 0.0, 0.0}; // Red fill

// Function to set pixel
void setPixel(int x, int y) {
    glColor3fv(fillColor);
    glBegin(GL_POINTS);
    glVertex2i(x, y);
    glEnd();
    glFlush();
}

// Function to get pixel color
void getPixel(int x, int y, float color[3]) {
    glReadPixels(x, y, 1, 1, GL_RGB, GL_FLOAT, color);
}

// Boundary Fill Function (4-connected recursion)
void boundaryFill(int x, int y) {
    float currentColor[3];
    getPixel(x, y, currentColor);

    // If current pixel is NOT boundary and NOT already filled
    if ((currentColor[0] != boundaryColor[0] || currentColor[1] != boundaryColor[1] || currentColor[2] != boundaryColor[2]) &&
        (currentColor[0] != fillColor[0] || currentColor[1] != fillColor[1] || currentColor[2] != fillColor[2])) {
        
        setPixel(x, y);

        // Recursive calls in 4 directions
        boundaryFill(x + 1, y);
        boundaryFill(x - 1, y);
        boundaryFill(x, y + 1);
        boundaryFill(x, y - 1);
    }
}

// Draw the polygon boundary to be filled
void drawPolygon() {
    glColor3fv(boundaryColor);
    glBegin(GL_LINE_LOOP);
        glVertex2i(150, 150);
        glVertex2i(350, 150);
        glVertex2i(350, 350);
        glVertex2i(150, 350);
    glEnd();
    glFlush();
}

// Mouse function: Filling starts where you click
void mouse(int button, int state, int x, int y) {
    if (button == GLUT_LEFT_BUTTON && state == GLUT_DOWN) {
        boundaryFill(x, 500 - y); // Invert y for OpenGL coordinates
    }
}

void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    drawPolygon();
}

void init() {
    glClearColor(1.0, 1.0, 1.0, 1.0); // White background
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(0, 500, 0, 500);
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutCreateWindow("Boundary Fill Algorithm - C");

    init();
    glutDisplayFunc(display);
    glutMouseFunc(mouse);
    glutMainLoop();

    return 0;
}

      
      `
    },
    {
      id: 8.8,
      question: "8. Flood Fill Algorithm.",
      answer: "",
      codeExample: `
#include <GL/glut.h>
#include <stdio.h>

float fillColor[] = {1.0, 0.0, 0.0};   // Red
float oldColor[]  = {1.0, 1.0, 1.0};   // White

// Get pixel color
void getPixel(int x, int y, float color[3])
{
    glReadPixels(x, y, 1, 1, GL_RGB, GL_FLOAT, color);
}

// Set pixel color
void setPixel(int x, int y)
{
    glColor3fv(fillColor);
    glBegin(GL_POINTS);
    glVertex2i(x, y);
    glEnd();
    glFlush();
}

// Flood Fill Function
void floodFill(int x, int y)
{
    float current[3];
    getPixel(x, y, current);

    if (current[0] == oldColor[0] &&
        current[1] == oldColor[1] &&
        current[2] == oldColor[2])
    {
        setPixel(x, y);

        floodFill(x + 1, y);
        floodFill(x - 1, y);
        floodFill(x, y + 1);
        floodFill(x, y - 1);
    }
}

// Display Function
void display()
{
    glClear(GL_COLOR_BUFFER_BIT);

    // Draw Square
    glColor3f(0.0, 0.0, 0.0);
    glBegin(GL_LINE_LOOP);
        glVertex2i(200, 200);
        glVertex2i(400, 200);
        glVertex2i(400, 400);
        glVertex2i(200, 400);
    glEnd();

    // Start Flood Fill from inside point
    floodFill(300, 300);

    glFlush();
}

// Initialization
void init()
{
    glClearColor(1.0, 1.0, 1.0, 1.0); // White background
    gluOrtho2D(0, 500, 0, 500);
}

// Main
int main(int argc, char** argv)
{
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutCreateWindow("Simple Flood Fill");

    init();
    glutDisplayFunc(display);

    glutMainLoop();
    return 0;
}
      `
    },
    {
      id: 9.9,
      question: "9. Transformation",
      answer: "",
      codeExample: `
#include <GL/glut.h>
#include <stdio.h>

int tx = 100, ty = 50;   // Translation values

// Original rectangle coordinates
int x1 = 100, y1 = 100;
int x2 = 200, y2 = 200;

// Function to draw rectangle
void drawRectangle(int x1, int y1, int x2, int y2)
{
    glBegin(GL_LINE_LOOP);
        glVertex2i(x1, y1);
        glVertex2i(x2, y1);
        glVertex2i(x2, y2);
        glVertex2i(x1, y2);
    glEnd();
}

// Display function
void display()
{
    glClear(GL_COLOR_BUFFER_BIT);

    // Original Rectangle (Black)
    glColor3f(0.0, 0.0, 0.0);
    drawRectangle(x1, y1, x2, y2);

    // Translated Rectangle (Red)
    glColor3f(1.0, 0.0, 0.0);
    drawRectangle(x1 + tx, y1 + ty, x2 + tx, y2 + ty);

    glFlush();
}

// Initialization
void init()
{
    glClearColor(1.0, 1.0, 1.0, 1.0);
    gluOrtho2D(0, 500, 0, 500);
}

// Main function
int main(int argc, char** argv)
{
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutCreateWindow("2D Translation");

    init();
    glutDisplayFunc(display);

    glutMainLoop();
    return 0;
}

      `
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },

  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>Computer Graphics Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
