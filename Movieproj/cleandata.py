import  pandas as pd
import numpy as np
import matplotlib.pyplot as plt



storedf = pd.read_csv('C:/users/x/project analysis/sales_dataset.csv')
print(storedf.head())

# Check for missing values
print(storedf.isnull().sum())       

# rank sales by region
region_sales = storedf.groupby('State')['Amount'].sum().sort_values(ascending=False)
print(region_sales)

# rank customers by state using quantity purchased
customer_state_qty = storedf.groupby(['State', 'CustomerName'])['Quantity'].sum().sort_values(ascending=False)
print(customer_state_qty)

# add a column that includes the ranks of customers by quantity purchased within each state from highest to lowest
storedf['CustomerRankInState'] = storedf.groupby('State')['Quantity'].rank(method='dense', ascending=False).astype(int)
print(storedf[['State', 'CustomerName', 'Quantity', 'CustomerRankInState']].head(10))