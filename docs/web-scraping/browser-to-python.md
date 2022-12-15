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


## Bonus: Parse The Response

You can parse the response data in a hacky way.  

```python

# run the code from curlconverter.com, which will give you a `response` object.

>>> import json
... response_string = response.text
... json_string = response_string[response_string.index("(") +1:response_string.index('"AdditionalData":')-1]+'}'
... parsed_string = json.loads(json_string)
... stores = parsed_string['ResultData']

>>> stores
[{'LocationId': {'StoreNumber': 21809, 'SatelliteNumber': 0},
  'Address': {'Address1': '4888 NW Bethany Blvd',
   'Address2': 'Suite K-1',
   'Address3': 'Bethany Village Centre',
   'City': 'Portland',
   'StateProvCode': 'OR',
   'PostalCode': '97229',
   'CountryCode': 'US',
   'CountryCode3': 'USA'},
  'Geo': {'Latitude': 45.5548,
   'Longitude': -122.8358,
   'TimeZoneId': 'America/Los_Angeles',
   'CurrentUtcOffset': 0},
  'ListingNumber': 1,
  'OrderingUrl': 'http://order.subway.com/Stores/Redirect.aspx?s=21809&sa=0&f=r&scc=US&spc=OR',
  'CateringUrl': 'https://www.ezcater.com/catering/pvt/subway-portland-nw-bethany-blvd',
  'ExtendedProperties': None},
...
```

## When to use this approach

This is great for adhoc things, but you probably want to use a headless browser and actually scrape the HTML if you want to do this in a repeatable way.  But many times you want to do a one-off scrape, this isn't so bad!