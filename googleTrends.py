
import pandas as pd 
from pytrends.request import TrendReq

import plotly.express as px

# from pytrends.request import TrendReq
print('coucou')
pytrends = TrendReq() ## ou en-US
kw_list = ["schneider"]

pytrends.build_payload(kw_list, timeframe='today 1-m')
data = pytrends.interest_over_time() 
# data = data.reset_index() 
print(data.values)
# df = pytrends.trending_searches(pn="united_states")
# pytrends.multirange_interest_over_time()
# pytrends.top_charts(2023, hl='en-US', tz=300, geo='GLOBAL')

# data = pytrends.interest_over_time() 
# data = data.reset_index() 
# pytrends.get_historical_interest(kw_list, year_start=2021, month_start=9, day_start=1, hour_start=0, year_end=2021, month_end=9, day_end=30, hour_end=0, cat=0, sleep=0)



# fig = px.line(data, x="date", y=['tesla'], title='Keyword Web Search Interest Over Time')
# fig.show() 