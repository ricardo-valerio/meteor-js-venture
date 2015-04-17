Understanding ordering files in Meteor
===

Run the project and you can see order of loaded files in your developer console:

    /client/subfolder/lib/script.js loaded
    /client/lib/script.js loaded
    /lib/script.js loaded
    /client/subfolder/script.js loaded
    /client/1script.js loaded
    /client/Ascript.js loaded
    /client/Bscript.js loaded
    /client/script.js loaded
    /common/script.js loaded
    /client/subfolder/lib/main.script.js loaded
    /client/subfolder/main.script.js loaded
    /client/main.script.js loaded

Files in "lib" folders are loaded first. Notice the order:

    /client/subfolder/lib/script.js
    /client/lib/script.js
    /lib/script.js

Meteor documentation says:

Files in subdirectories are loaded before files in parent directories,
so that files in the deepest subdirectory are loaded first,
and files in the root directory are loaded last. - Within a directory,
files are loaded in alphabetical order by filename.

Files in subfolders are loaded second:

    /client/subfolder/script.js

Then files in top level folders of project are loaded in alphabetical order:

    /client/1script.js
    /client/Ascript.js
    /client/Bscript.js
    /client/script.js
    /common/script.js

Files which start with "main.*" are loaded last:

    /client/subfolder/lib/main.script.js
    /client/subfolder/main.script.js
    /client/main.script.js