---
title: Browser requests to python code with a few clicks
description: An amazing hack for turning web requests in your browser into reusable python code with a few clicks.
image: https://user-images.githubusercontent.com/1483922/207928666-20107276-3803-42df-b0b1-55df93d15e43.png
---

I learned this from Zachary Blackwood's 2022 [NormConf](https://normconf.com/) Talk.


## Example: Get A List of Subway Restaurants With Python

1. Go to https://www.subway.com/en-US/locator in Google Chrome

![](subway.png)

2. Open developer tools using `Option + CMD + I`

3. Go the the network tab, and hit the clear button

![](clear.png)

4. Look for a network request that seems like it is getting data, in this case `GetLocations.ashx...` looks super promising.

![](requests.png)

5. Right click on that particular event and select `Copy -> Copy as Curl`

![](copy-as-curl.png)


6. Go to [curlconverter.com](https://curlconverter.com/) and paste the curl command there.

![](curl-to-py.png)


Enjoy your python code that uses this otherwise undocumented API :)