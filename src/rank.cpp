#include<bits/stdc++.h>
using namespace std;
#define ll long long int
#define f(i,n) for(ll i=0;i<n;i++)
#define vec vector<ll>
#define all(x) (x).begin(), (x).end()
#define len(a) ((int) (a).size())
ll factorial(ll n){
    if(n==1 || n==0) return n;
    return n*factorial(n-1);
}
void solve(){
  string s; 
  cin>>s;
//   cout<<s<<endl;
  string b=s;
  map<char,ll> mp;
  sort(all(b));

ll n=s.size();
for (int i = 0; i <n; i++)
{
    
    if(mp[b[i]]!=0)
    {
        cout<<0<<endl;
        return;
    }
    mp[b[i]]=i+1;
}

ll ans=0;
ll number=n-1;

for (ll i = 0; i <n; i++)
{
    
    ll cnt=0;
    for (ll j =i+1; j<n; j++)
    {
        if(mp[s[i]]>mp[s[j]])
        cnt++;
    }
    ans+=((cnt*factorial(number)))%(ll)(1e9+7);
    number--;
    
}

cout<<(ans+1)%(ll)(1e9+7)<<endl;
return;

}
int main(){
ll t =1;
cin>>t;
while(t--){
  solve();
  }
return 0;
}