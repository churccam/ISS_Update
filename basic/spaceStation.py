#!/bin/python3

import json
import turtle
import urllib.request

astro_url = 'http://api.open-notify.org/astros.json'
astro_response = urllib.request.urlopen(astro_url)
astro_results = json.loads(astro_response.read())
people = astro_results['people']

print('People in Space: ', astro_results['number'])

for person in people:
  print(person['name'])


station_url = 'http://api.open-notify.org/iss-now.json'
station_responce = urllib.request.urlopen(station_url)
station_results = json.loads(station_responce.read())

print(station_results)

location = station_results['iss_position']
lat = location['latitude']
lon = location['longitude']
print(lat, long)