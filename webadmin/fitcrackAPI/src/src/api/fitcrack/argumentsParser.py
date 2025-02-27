'''
   * Author : see AUTHORS
   * Licence: MIT, see LICENSE
'''

from flask_restplus import reqparse

"""Parser for arguments which are used in multiple endpoints"""


pagination = reqparse.RequestParser()
pagination.add_argument('page', type=int, required=False, default=1, help='number of the page')
pagination.add_argument('per_page', type=int, required=False, choices=[10, 25, 50, 100],
                        default=25, help='Maximum number of jobs in response')

path = reqparse.RequestParser()
path.add_argument('path', type=str, required=True)