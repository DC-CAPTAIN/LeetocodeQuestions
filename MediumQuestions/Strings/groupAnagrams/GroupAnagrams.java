public class GroupAnagrams{
    public List<List<String>> groupAnagrams(String[] strs){
        HashMap<String, List<String>> hm = new HashMap<>();

        for(String s : strs){
            char[] chars = s.toCharArray();

            Arrays.sort(chars);

            String key = new String(chars);

            if(!hm.containsKey(key)) {
                hm.put(key, new ArrayList<String>());
            }
            hm.get(key).add(s);
        }
        return new ArrayList<>(hm.values());
    }
}