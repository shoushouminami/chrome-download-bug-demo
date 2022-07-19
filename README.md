### Chrome Bug 1345528 Demo

https://bugs.chromium.org/p/chromium/issues/detail?id=1345528

#### Tested version
Version 103.0.5060.114 (Official Build) (arm64)

#### How to reproduce
1. Clone this repo
2. Open Chrome and load unpacked extension from the cloned folder
3. Click extension icon, then click the Download button

#### Expected behavior
Chrome will show saveAs dialog for the download

#### Observed behavior
The download is cancelled with state "interrupted" and reason "USER_CANCELED"
