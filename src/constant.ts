export const EXCLUDE=['ArtificialInteligence',
'ChatGPT',
'learnmachinelearning',
'MachineLearning',
'mongodb',
'node',
'Frontend',
'developersIndia'
];

export const TAB_DISPALY:Record<string,string> = {
    "TODAYILEARNED":"TIL"
}
export const TABS = {
    "ALL":[],
    "TECH":['technews','technology',"gadgets",'ChatGPT','developersIndia'],
    "BUSINESS":["Economics","finance"],
    "NEWS":["worldnews"],
    "DEV":['DevTo','javascript','Frontend','mongodb','node','reactjs','learnmachinelearning','MachineLearning','ArtificialInteligence'],
    "INTERESTING":['InternetIsBeautiful','coolgithubprojects'],
    "TODAYILEARNED":["todayilearned"]
}

export const SUB_R = [
    'technews',
    'technology',
    'Economics',
    'finance',
    'worldnews',
    'gadgets',
    'DevTo',
    'javascript',
    'Frontend',
    'mongodb',
    'node',
    'reactjs',
    'ChatGPT',
    'learnmachinelearning',
    'MachineLearning',
    'ArtificialInteligence',
    'InternetIsBeautiful',
    'coolgithubprojects',
    'developersIndia',
    'todayilearned'
]

export const BASE_URL = `https://www.reddit.com/r/`;

export const FEED_TYPE = '/hot.json'

export const TOOL_HEADING = {
    "INTERNAL":"Show Internal",
    "SORT":"Sort by date",
    "SHOW_TOP_10":"Show Top 10",
}

export const SHOW_TOP_10 = 9;


export const FUNCTION_WORDS =  [
    "the", "a", "an", "is", "in", "on", "to", "for", "of", "are", "was", "were", "be", "as", "with", "at", "by",
    "have", "from", "or", "that", "and", "a", "an", "the", "this", "that", "I", "you", "he", "she", "it", "we", "they",
    "what", "which", "who", "whom", "whose", "do", "does", "did", "will", "would", "can", "could", "should", "may",
    "might", "must", "go", "been", "if", "because", "when", "while", "after", "before", "until", "though",
    "although", "however", "no", "but", "not", "up", "out", "down", "on", "off", "over", "under", "again",
    "further", "then", "once", "here", "there", "all", "any", "some", "none", "such", "many", "most", "other",
    "same", "each", "work", "play", "move", "live", "eat", "drink", "grow", "see", "think", "feel", "become",
    "mean", "know", "say", "call", "want", "give", "come", "take", "make", "put", "seem", "hear", "tell", "make",
    "keep", "look", "find", "hold", "turn", "could", "love","how","wont", "new", "strong", "weak","week","us"
  ]